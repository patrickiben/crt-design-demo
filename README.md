# CRT design engine: live demo console

**Live:** https://patrickiben.github.io/crt-design-demo/

A single self-contained HTML page that runs the pipeline of the preprint

> Iben P. *Contamination-Resilient Cluster Randomized Trial Design under Spatial Interference: A Simulation Study of Contamination Control.* Preprint, 2026. [doi:10.5281/zenodo.23486177](https://doi.org/10.5281/zenodo.23486177)

in your browser, on the paper's frozen public geography: 57 Malaria Atlas Project survey sites in Uganda.

- **Live** panels recompute from the raw site data: the six design pools, the ten-metric ranking with adjustable weights, and a Monte Carlo of the three estimators (naive, boundary-censored, spillover-adjusted). They use a JavaScript port of the deposited R code. The page footer records how closely the port agrees with the deposited run.
- **Deposited** panels show the archived R results as charts, including the two generalization testbeds.

The trial is simulated. The geography, survey counts and connectivity are real, while the arms, the intervention and its effect are not. As in the paper's main tables, the figures assume no between-site variance; the paper's Appendix D relaxes that assumption.

Code and data for the paper, including the R pipeline this page ports, are at [doi:10.17605/OSF.IO/XPA4S](https://doi.org/10.17605/OSF.IO/XPA4S).

No build step, no dependencies, no tracking. Open `index.html` in any modern browser.
