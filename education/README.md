# Educational materials for the CRT paper

Choose the depth that suits your reading:

| Edition | Read online | Download | What it covers |
|---|---|---|---|
| Concise study guide | [Study guide](STUDY_GUIDE.md) | [PDF](STUDY_GUIDE.pdf) | Main argument, ten dimensions, worked examples, key results and answered self-checks. |
| Complete companion | [Full walkthrough](COMPANION.md) | [97-page PDF](COMPANION.pdf) | The original 95 passage-by-passage entries, covering the manuscript and Appendices A-D. |

[Complete coverage map](COMPLETE_COVERAGE.md) lists the full companion's source passages. The two editions use the same exact preprint basis. They serve different reading depths.

The audience is a numerate reader with one statistics course and no background in cluster randomized trials. The companion was prepared for the exact public-data manuscript identified below. This entry adds a short route, vocabulary and answer notes. It does not replace the full walkthrough or silently update it for later papers.

## A short route through the argument

1. Start with entries **E1–E2** for the headline result and the split between measured data and simulation.
2. Read **E5–E7** for interference, the target effect and the limits of using low-exposure sites as a reference.
3. Follow the ten metric explanations in the Methods part of the companion. Ask what each actually computes, rather than relying on its name.
4. Read the operating-characteristics entries beside manuscript **§4, Tables 1–2, PDF pp27–38**. These headline simulations allocate individual sites using two design criteria.
5. Compare the separate whole-cluster and full-objective results in **§5.3, Table 5, pp44–48**. They answer a different comparison.
6. Finish with **§6.1, pp51–54, Appendix C, pp77–80, and Appendix D, pp81–84**. These address assumptions, wrong kernels, candidate-pool variation and extra between-site or between-cluster variation.

The paper uses **57 public Malaria Atlas Project survey sites** after its stated filtering. The 110 merged locations appear in the directed map, not the trial analysis. A separate private 55-site predecessor is not the basis of this edition. Source: §2, PDF p5, and the public workflow figure on p7.

One wording clarification matters when reading the unchanged companion: measured geography and survey counts do not make the connectivity a measured movement network. Gravity flows, exposure scores and cross-arm infection mixing are modeled from real inputs. The trial assignments, intervention and outcomes are simulated. Survey numbers examined are not census populations; elevation rank is not mapped hydrology. See §§2–3 and the companion's data and metric entries.

## The ten dimensions, in the paper's own terms

The names below identify this paper's quantities. They are not ten validated field thresholds or an automatic trial approval checklist. See Methods §3.3, PDF pp14–22.

| Dimension | What the implementation measures | Important boundary |
|---|---|---|
| Population Balance | A weighted distance between arm means of four baseline covariates. | Not a headcount difference; raw units and weights matter. |
| Wasserstein Distance | Average featurewise differences between one-dimensional empirical distributions. | Not a certificate that the full joint distributions match. |
| Density Symmetry | Similarity of arm density using interaction-weighted ground area. | Geography and proxy weights, not measured contact density. |
| Euler Characteristic / Spatial Contiguity | The number of connected pieces in the dissolved treatment-area map. | The implemented quantity is the component count, not the full Euler characteristic with holes. |
| Persistence Gap | A matching cost between terrain-based persistence diagrams. | The deposited calculation sums squared costs without taking the final square root. |
| Spatial Mixing | Risk-asymmetry at 10km divided by that at 2km, with a denominator floor. | A scale-sensitivity ratio, not observed social mixing. |
| Variational Free Energy / VFE | A BIC score for a factor model of spatial-model residuals. | An inherited label; not a fitted variational free-energy bound. |
| Contamination AUC | An integral of modeled cross-arm risk asymmetry over distance scales. | Uses the same profile as Spatial Mixing; they are not independent signals. |
| Frontier Risk / Buffer Depth AUC | An integral of baseline risk mass near the opposing arm. | A zero score on sparse sites is not proof of no spillover. |
| Mobility Network Leakage AUC | An integral of cross-arm shares in a symmetric gravity network. | Modeled flow, not observed human movement. |

AUC means area under a curve. BIC is a model-fit score with a complexity penalty. A persistence diagram summarizes when spatial features appear and disappear as a scale changes. The paper's directed source/sink refinement is separate: it does not enter the composite score. Balancing net export can still leave high total cross-arm flow.

## Vocabulary for the results

- **Interference:** One site's outcome can depend on another site's treatment.
- **Estimand:** The exact effect a study aims to estimate. Here it is a boundary-insulated, all-treated versus all-control total effect on a conditional log-odds scale.
- **Core or boundary-censored estimator:** An analysis retaining the 70% least-exposed sites. They still have nonzero modeled exposure.
- **Bias:** Average error in the estimated effect across simulated trials.
- **Coverage:** How often a confidence interval contains the true simulated effect. A nominal 95% interval targets 0.95 coverage.
- **RMSE:** Root mean squared error; a measure combining average error and variability.
- **MCSE:** Monte Carlo standard error; uncertainty from running finitely many simulated trials.
- **ICC:** Intracluster correlation; a measure of shared variation within an allocation unit.
- **Kernel:** The assumed rule describing how connection strength changes with distance.
- **Elite pool:** A set of highly ranked candidate allocations, not one guaranteed optimal field design.

## Twelve self-checks and answer notes

These answer notes support individual study. They are not evidence that learners were tested.

1. **Core idea — What is measured, and what is simulated?** Coordinates, survey denominators and baseline parasite rates are public observations. Assignments, intervention effects and trial outcomes are simulated. Exposure and mobility are proxies. In the Yemen and Louisiana corroborations, hypothetical outcome surveys also use a simulated denominator. Source: §2, p5; §4.3, pp36–38; E2.
2. **Core idea — Why can good baseline balance leave contamination?** Arms can have similar averages while sitting next to each other. Covariate balance and cross-arm exposure address different failure modes. The paper compares them rather than treating either as sufficient. Source: Introduction, pp2–4; §4; E6.
3. **Core idea — Does core-zone analysis identify an unexposed group?** No. Every pair has positive modeled connection weight. The retained sites have less exposure, not zero. Treating them as a reference uses an anchoring assumption and changes the retained population. Source: §4.1, pp27–29; E5 and E7.
4. **Core idea — Does the composite score have a p-value?** No. It ranks the available candidate designs. The featured score of 100 is relative to that pool, not a probability, significance test or guarantee. Selection and evaluation reuse the same search. Source: §§3.4–3.5, pp22–26; §6.1, pp51–54.
5. **Boundary — Is 0.48 coverage a successful 95% analysis?** No. At moderate contamination, headline site-level core coverage ranges from about 0.26–0.29 under simple randomization to 0.28–0.48 under the two-criterion design. The best pool does not describe every pool, and even 0.48 is far below 0.95. Source: Abstract; Appendix C, Table 15, p79; E1.
6. **Boundary — What does Table 1's precision gain depend on?** The correctly specified spillover-adjusted estimator has RMSE 0.149 under SR and 0.095 under CRR, a reduction of about 36%. This assumes the analysis knows the exposure kernel. Under wrong kernels, adjusted coverage drops to roughly 51–89%. A robust design advantage does not establish robust adjusted inference. Source: Table 1, p32; Appendix C, Table 13, pp77–78.
7. **Boundary — Can the headline site-allocation result validate the full ten-metric cluster engine?** No. The headline site simulation uses balance and raw cross-arm flux. The full composite is tested separately over whole-cluster candidates. Comparing designs also requires matching cluster resolution and the analysis unit. Source: §4, pp27–38; §5.3, pp44–48; Appendix D.
8. **Boundary — Does reducing bias guarantee better coverage?** No. Coverage also depends on variance, standard errors and the analysis model. In Table 2 at contamination 0.5, naive CRR coverage is 0.092 versus SR 0.126 despite lower CRR bias. Source: Table 2, p33.
9. **Transfer — How would you interpret a tiny simulation difference?** Use its MCSE before calling it a gain. For 1,000 binary coverage outcomes the worst-case MCSE is about 0.016. The paper treats differences below two MCSE of the difference as directional; three or more meets its precision rule, but reproducibility still matters. It gives no RMSE MCSE. A few thousandths in RMSE should not be promoted to a firm ranking. Source: §4.2, p31.
10. **Transfer — What changes if sites differ beyond binomial chance?** Use an analysis that respects the allocation and variation. Appendix D shows failure of the simple binomial analysis even without contamination. Its site-level and cluster-level alternatives behave better in the tested settings, but do not eliminate every calibration problem. Under cluster ICC, matched-resolution comparisons also weaken the apparent advantage of coarse partitions. Source: Appendix D, pp81–84.
11. **Transfer — What would you need before recommending a field design?** A defensible exposure model, operational constraints, a fixed allocation scheme, a variance-aware analysis and a prospective inferential plan. The simulation's surrogate quantities do not supply observed movement or intervention efficacy. Randomization inference is recommended, not evaluated here. A very small allocation space can make a conventional test impossible. Source: §6.1, pp51–54; Appendix D.
12. **Transfer — Does the proposed mitigation menu prove its actions work?** No. Appendix A gives proposed responses to diagnostic failure. It does not test those actions in a field trial. Treat the menu as a research and planning framework requiring local evidence and validation. Source: Appendix A, pp68–71.

## Exact basis and provenance

The complete companion Markdown and PDF are unchanged copies of the existing public-data companion. This entry and its answer notes were added for repository publication on **23 October 2026**. Original local working files were preserved.

- Manuscript: Patrick Iben, *Contamination-Resilient Cluster Randomized Trial Design under Spatial Interference: A Simulation Study of Contamination Control*, **v1**, DOI **10.5281/zenodo.23486177**.
- Exact source PDF: [01_manuscript_publicdata.pdf](https://zenodo.org/api/records/23486177/files/01_manuscript_publicdata.pdf/content), **84 pages**.
- Source PDF SHA-256: `9427b16d36adaab1eb6119a106476bc4d054340d73fea2760ce82f01dad3685d`.
- Frozen manuscript TeX SHA-256, to which the companion's line references point: `458469112b59d68ab6deda48fc205b3679e36568494453d4ca9933dd11ea0e93`.
- Unchanged companion Markdown SHA-256: `75a4c12dac2c5ee47a67cadfd6b24ddd264c7bc6be2d4b4bad521082cc577b14`.
- Unchanged companion PDF SHA-256: `d3a433a86288d97cdeb30e3805dd062cae50b38424f8bdcd9b7af8f756d3a880`.
- Scientific code and data: [OSF deposit XPA4S](https://doi.org/10.17605/OSF.IO/XPA4S). The companion's `supporting/` paths are aliases explained in its opening note.

The current Zenodo record and its latest-version endpoint were checked on 23 October 2026. This guide remains pinned to the exact source above; the repository's manuscript link provides normal preprint navigation.

The existing mechanical G14 checks found 95 six-field entries, no unaccounted manuscript lines under their coverage contract, matching source/excerpt hashes, and no numeric or locator failures. The readability aid passed its stated ceilings. The overall gate remains **PARTIAL**, with human fidelity/learner-transfer, upstream and accessibility rows pending. These checks are not full scientific revalidation or human signoff. Visual inspection of all 97 PDF pages at contact-sheet scale found no clipping or overlap. The PDF is untagged; that inspection does not establish screen-reader accessibility.

The paper's source data and third-party materials retain their existing terms. This educational entry does not change any source or repository license.

## Download integrity

[ARTIFACTS.json](ARTIFACTS.json) records SHA-256 checksums for the teaching text and PDF. The Markdown version supports adjustable text size and browser reading.
