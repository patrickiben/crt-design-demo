import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';

// A local HTTP origin exercises workers and browser behavior as Pages will, without external APIs.
const html = await readFile(new URL('../index.html', import.meta.url));
const server = createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(html);
  } else { res.writeHead(404); res.end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
  await page.goto(origin, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelectorAll('#rank-tbody tr').length === 10);
  assert.match(await page.locator('#rank-tbody tr').first().textContent(), /Spectral/);
  assert.equal(await page.evaluate(() => quantile7([0, 10], 0.7)), 7);
  await page.locator('#btn-pools').click();
  await page.waitForFunction(() => document.querySelector('#pool-status').textContent.includes('pools formed'));
  assert.equal(await page.locator('#pool-tbody tr').count(), 4);
  await page.locator('#mc-n').fill('100');
  await page.locator('#btn-mc').click();
  await page.waitForFunction(() => document.querySelector('#btn-mc').textContent === 'Run Monte Carlo' && window._mcEsts?.length > 0);
  const estimates = await page.evaluate(() => window._mcEsts);
  assert.equal(estimates.length, 100);
  assert.ok(estimates.every(Number.isFinite));
  assert.match(await page.locator('#mc-tbody').textContent(), /live estimate/);
  const before = await page.locator('#w-sum').textContent();
  await page.locator('#sliders input').first().fill('0');
  await page.locator('#sliders input').first().dispatchEvent('input');
  assert.notEqual(await page.locator('#w-sum').textContent(), before);
  await page.locator('#btn-reset-w').click();
  assert.equal(await page.locator('#w-sum').textContent(), before);

  assert.deepEqual(errors, [], 'Uncaught browser errors');
  console.log('PASS: offline browser smoke, data integrity, and interactive recomputation');
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
