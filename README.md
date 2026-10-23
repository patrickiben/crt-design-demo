# CRT design engine: live demo console

**Live:** https://patrickiben.github.io/crt-design-demo/

A single self-contained HTML page that runs the preprint's pipeline in your browser,
on its frozen public geography: 57 Malaria Atlas Project survey sites in Uganda.

> Iben P. *Contamination-Resilient Cluster Randomized Trial Design under Spatial Interference: A Simulation Study of Contamination Control.* Preprint v1, 2026. [doi:10.5281/zenodo.23486177](https://doi.org/10.5281/zenodo.23486177)

[Latest preprint](https://doi.org/10.5281/zenodo.23486176) ·
corresponding [study code and data](https://doi.org/10.17605/OSF.IO/XPA4S) ·
[Manuscript → code → demo map](https://github.com/patrickiben/patrickiben/blob/main/RESEARCH_MAP.md).
Spatial exposure and spillover methods from this framework are also adapted in
[Coastal Water Resilience](https://patrickiben.github.io/public-data-consoles/consoles/coastal-water-resilience/),
alongside concepts from the directed-contagion framework.

- **Live** panels recompute from the raw site data: the four allocation pools (SR, CCR, CC and CRR), the ten-metric ranking with adjustable weights, and a Monte Carlo of the three estimators (naive, boundary-censored, spillover-adjusted). They use a JavaScript port of the deposited R code. The page footer records how closely the port agrees with the deposited run.
- **Deposited** panels show the archived R results as charts, including the two generalization testbeds.

The trial is simulated. The geography, survey counts and connectivity are real, while the arms, the intervention and its effect are not. As in the paper's main tables, the figures assume no between-site variance; the paper's Appendix D relaxes that assumption.

Code and data for the paper, including the R pipeline this page ports, are at [doi:10.17605/OSF.IO/XPA4S](https://doi.org/10.17605/OSF.IO/XPA4S).

No build step, no dependencies, no tracking. Open `index.html` in any modern browser.

## Educational companion

[Plain-language reading guide and PDF](education/README.md), with a route through the full companion, ten-metric definitions, self-check answers and exact manuscript provenance.

## Code license and third-party material

Original project code is licensed under [MIT](LICENSE), copyright 2026 Patrick Iben.
Third-party code, fonts, data, model assets and outputs retain their respective licenses and terms;
they are not relicensed by this file.

## Browser smoke checks

Run `npm ci`, `npx playwright install --only-shell chromium`, then `npm test`.
The browser check runs from a local HTTP origin with external requests blocked. It exercises
interactive recomputation and checks packaged input/result integrity. It is a smoke check,
not independent validation of the deposited scientific analysis. GitHub Actions runs it on changes.
