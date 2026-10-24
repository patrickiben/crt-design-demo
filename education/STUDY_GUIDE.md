# CRT: concise study guide

A short introduction to *Contamination-Resilient Cluster Randomized Trial Design under Spatial Interference: A Simulation Study of Contamination Control* by Patrick Iben.

This guide explains the main argument, ten dimensions, key results and limits. It is for a numerate reader with one statistics course. It is the shorter of two editions: the [complete companion](COMPANION.md) gives 95 passage-by-passage explanations, with an unchanged [97-page PDF](COMPANION.pdf). Use that edition for the full methods and appendix walkthrough.

**Exact basis:** preprint v1, [Zenodo record 23486177](https://doi.org/10.5281/zenodo.23486177), including Appendices A-D.

## The problem in one picture

Imagine two groups of villages in a mosquito-control trial. One group receives the intervention and the other provides a comparison. The experiment asks whether the intervention changes disease risk. A fair allocation should make the groups comparable before treatment.

Now imagine mosquitoes and people crossing the boundary. Some control villages receive indirect protection. Some treated villages remain exposed to untreated neighbors. The contrast can shrink even when the intervention has an effect. A better initial balance does not itself close those routes.

The paper studies how to choose allocations that reduce modeled cross-arm exposure while retaining baseline balance. It also asks whether that choice improves estimates and confidence intervals in simulated trials. Those are separate questions. A design score can improve even when the final analysis remains badly calibrated.

The practical lesson is to plan allocation and analysis together. The paper does not show that geography alone can remove interference or replace a justified statistical model. Source: Introduction and §4.

## A short route through the argument

1. **E1-E2:** Headline findings and measured-versus-simulated inputs.
2. **E5-E7:** Interference, the target effect and the core-zone assumption.
3. **Methods entries:** The ten metrics and their actual implementations.
4. **§4, Tables 1-2, pp27-38:** Two-criterion simulations assigning individual sites.
5. **§5.3, Table 5, pp44-48:** Separate whole-cluster and full-objective comparisons.
6. **§6.1 and Appendices C-D, pp51-54 and pp77-84:** Limitations, wrong kernels, candidate-pool variation and extra correlation.

The paper uses **57 public Malaria Atlas Project survey sites** after its stated filtering. The 110 merged locations appear in the directed map, not the trial analysis. A separate private 55-site predecessor is not the basis of this edition. Source: §2, PDF p5, and the public workflow figure on p7.

One wording clarification matters when reading the unchanged companion: measured geography and survey counts do not make the connectivity a measured movement network. Gravity flows, exposure scores and cross-arm infection mixing are modeled from real inputs. The trial assignments, intervention and outcomes are simulated. Survey numbers examined are not census populations; elevation rank is not mapped hydrology. See §§2-3 and the companion's data and metric entries.

## The ten dimensions, in the paper's own terms

The names below identify this paper's quantities. They are not ten validated field thresholds or an automatic trial approval checklist. See Methods §3.3, PDF pp14-22.

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

## Four worked readings

These examples show how to reason with the results. Hypothetical calculations are labeled; they are teaching examples, not extra paper results.

### 1. A smaller error can still give poor intervals

Bias concerns the average estimated effect. Coverage concerns the whole interval. They do not measure the same thing. An estimate may move closer to the truth while its reported uncertainty shrinks too much. Then the interval can miss the truth more often.

For a **hypothetical illustration**, suppose the true effect is 1.0. Analysis A reports an estimate of 0.6 with interval 0.1 to 1.1. Analysis B reports 0.8 with interval 0.7 to 0.9. B has the smaller point error in this example. A's interval contains the truth, while B's does not. One example cannot estimate coverage; that requires repeated samples or simulated trials.

The paper provides the repeated-trial counterpart. At contamination 0.5, Table 2 reports naive CRR coverage of 0.092 versus SR coverage of 0.126 despite a bias improvement. That supports the distinction, not the claim that either analysis is satisfactory. See manuscript Table 2, p33, and the full companion's operating-characteristics entries.

**Check:** Which quantity would reveal overconfident uncertainty estimates? **Answer:** Repeated-trial coverage relative to its stated target, together with checks of the standard-error model. The point estimate alone cannot do so.

### 2. Read a relative improvement with its assumptions

Table 1 gives spillover-adjusted RMSE values of 0.149 under simple randomization and 0.095 under the two-criterion design. The proportional reduction is (0.149 minus 0.095) divided by 0.149, about 0.362, or 36%.

This calculation compares the same estimator under two designs. It does not compare a naive estimator with an adjusted one. It also belongs to one reported setting and candidate pool. The table assumes that the analysis knows the exposure kernel. A kernel is a rule for how interaction strength changes with distance.

Appendix C changes that rule in the data-generating model while leaving the assumed analysis rule different. The adjusted estimator's interval coverage then falls well below the nominal target in several settings. Thus a precision gain under a correct model does not prove valid uncertainty under a wrong model. See Table 1, p32, and Appendix C, pp77-80.

**Check:** Is 36% a universal benefit of the full ten-dimension framework? **Answer:** No. It is a derived comparison for that table's two-criterion site-allocation experiment and correctly specified adjusted estimator.

### 3. Simulation results have their own sampling noise

Suppose a performance measure is a fraction computed over 1,000 simulated trials. If its probability is p, its Monte Carlo standard error is approximately the square root of p times (1 minus p), divided by 1,000 inside the square root.

At the **hypothetical worst-case value** p = 0.5, that gives the square root of 0.25/1,000, about 0.0158. This is the basis of the manuscript's approximately 0.016 ceiling for such a fraction. It describes uncertainty due to running finitely many simulations. It does not include uncertainty about whether the disease model represents the real world.

A difference of a few thousandths can therefore be too small to interpret firmly. A correct comparison also considers whether the simulations are paired and how variable the difference is. One marginal MCSE is not automatically the standard error of a difference. See §4.2, p31.

**Check:** Would ten times as many simulated trials make a wrong exposure model correct? **Answer:** No. It would reduce Monte Carlo noise around that model's answer. Model misspecification is a different problem.

### 4. Net leakage can hide large traffic

The directed refinement distinguishes sources from sinks. A source sends more modeled risk outward than it receives; a sink receives more than it sends. Net flow is a difference. Total flow is a sum.

For a **hypothetical illustration**, suppose two arms exchange 100 flow units in each direction. Their net exchange is zero, but their total cross-arm exchange is 200. If another design exchanges 10 each way, its net is also zero while its total is only 20. Net balance alone cannot distinguish these situations.

This explains why a source/sink view and a cross-arm leakage measure answer different questions. The paper's directed refinement is separate from the ten-metric composite, and its benefit is not uniform across the corroborating geographies. The Louisiana comparison is an explicit counterexample to treating directionality as universally helpful. See §3.3's directed refinement, §4.3 and Appendix B.

**Check:** Does zero net flow establish no contamination? **Answer:** No. Opposing flows can cancel numerically without removing exposure in either direction.

## A reading checklist for applying the framework

Before transferring a result, identify the units. Are the assigned units individual survey sites or whole clusters? Are the analysis units the same? How many assignments remain possible after the design restrictions? A design with very few clusters can sharply limit what randomization-based inference can resolve.

Next identify what has been measured. Geographic coordinates and baseline rates can be observed while contact weights remain modeled. An exposure proxy is useful only within its stated assumptions. The 57-site edition uses public data, but that label does not turn assumed movement or simulated treatment effects into observations.

Then identify the comparison. A winner among candidate allocations is conditional on the available pool, metric scaling and weights. A ranking of 100 is not a probability of success. The two-criterion simulations, the full ten-metric cluster search and the later whole-cluster comparisons answer related but distinct questions.

Finally inspect the failure cases. The paper discusses residual contamination, wrong kernels, variability across candidate pools, additional correlation and the power costs of coarse clusters. Appendix A's mitigation menu proposes responses to diagnostic failures. The paper does not report a field experiment showing those responses work.

**Teach-back:** A defensible summary should name the simulated evidence, the reduction in modeled exposure and bias, the incomplete recovery of interval coverage, and the need for analysis assumptions. A summary that keeps only the improved ranking or best result loses the argument's boundary.

## Twelve self-checks and answer notes

These answer notes support individual study. They are not evidence that learners were tested.

1. **Core idea - What is measured, and what is simulated?** Coordinates, survey denominators and baseline parasite rates are public observations. Assignments, intervention effects and trial outcomes are simulated. Exposure and mobility are proxies. In the Yemen and Louisiana corroborations, hypothetical outcome surveys also use a simulated denominator. Source: §2, p5; §4.3, pp36-38; E2.
2. **Core idea - Why can good baseline balance leave contamination?** Arms can have similar averages while sitting next to each other. Covariate balance and cross-arm exposure address different failure modes. The paper compares them rather than treating either as sufficient. Source: Introduction, pp2-4; §4; E6.
3. **Core idea - Does core-zone analysis identify an unexposed group?** No. Every pair has positive modeled connection weight. The retained sites have less exposure, not zero. Treating them as a reference uses an anchoring assumption and changes the retained population. Source: §4.1, pp27-29; E5 and E7.
4. **Core idea - Does the composite score have a p-value?** No. It ranks the available candidate designs. The featured score of 100 is relative to that pool, not a probability, significance test or guarantee. Selection and evaluation reuse the same search. Source: §§3.4-3.5, pp22-26; §6.1, pp51-54.
5. **Boundary - Is 0.48 coverage a successful 95% analysis?** No. At moderate contamination, headline site-level core coverage ranges from about 0.26-0.29 under simple randomization to 0.28-0.48 under the two-criterion design. The best pool does not describe every pool, and even 0.48 is far below 0.95. Source: Abstract; Appendix C, Table 15, p79; E1.
6. **Boundary - What does Table 1's precision gain depend on?** The correctly specified spillover-adjusted estimator has RMSE 0.149 under SR and 0.095 under CRR, a reduction of about 36%. This assumes the analysis knows the exposure kernel. Under wrong kernels, adjusted coverage drops to roughly 51-89%. A robust design advantage does not establish robust adjusted inference. Source: Table 1, p32; Appendix C, Table 13, pp77-78.
7. **Boundary - Can the headline site-allocation result validate the full ten-metric cluster engine?** No. The headline site simulation uses balance and raw cross-arm flux. The full composite is tested separately over whole-cluster candidates. Comparing designs also requires matching cluster resolution and the analysis unit. Source: §4, pp27-38; §5.3, pp44-48; Appendix D.
8. **Boundary - Does reducing bias guarantee better coverage?** No. Coverage also depends on variance, standard errors and the analysis model. In Table 2 at contamination 0.5, naive CRR coverage is 0.092 versus SR 0.126 despite lower CRR bias. Source: Table 2, p33.
9. **Transfer - How would you interpret a tiny simulation difference?** Use its MCSE before calling it a gain. For 1,000 binary coverage outcomes the worst-case MCSE is about 0.016. The paper treats differences below two MCSE of the difference as directional; three or more meets its precision rule, but reproducibility still matters. It gives no RMSE MCSE. A few thousandths in RMSE should not be promoted to a firm ranking. Source: §4.2, p31.
10. **Transfer - What changes if sites differ beyond binomial chance?** Use an analysis that respects the allocation and variation. Appendix D shows failure of the simple binomial analysis even without contamination. Its site-level and cluster-level alternatives behave better in the tested settings, but do not eliminate every calibration problem. Under cluster ICC, matched-resolution comparisons also weaken the apparent advantage of coarse partitions. Source: Appendix D, pp81-84.
11. **Transfer - What would you need before recommending a field design?** A defensible exposure model, operational constraints, a fixed allocation scheme, a variance-aware analysis and a prospective inferential plan. The simulation's surrogate quantities do not supply observed movement or intervention efficacy. Randomization inference is recommended, not evaluated here. A very small allocation space can make a conventional test impossible. Source: §6.1, pp51-54; Appendix D.
12. **Transfer - Does the proposed mitigation menu prove its actions work?** No. Appendix A gives proposed responses to diagnostic failure. It does not test those actions in a field trial. Treat the menu as a research and planning framework requiring local evidence and validation. Source: Appendix A, pp68-71.

## Source, scope and further reading

This guide uses the exact source below and adds labeled teaching calculations. Original data terms apply. It does not report a new simulation, field test or human learner validation. Prepared 23 October 2026.

- Exact [source PDF](https://zenodo.org/api/records/23486177/files/01_manuscript_publicdata.pdf/content), 84 pages including appendices.
- Source PDF SHA-256: `9427b16d36adaab1eb6119a106476bc4d054340d73fea2760ce82f01dad3685d`.
- [Complete companion and coverage map](README.md).
- [Scientific code and data](https://doi.org/10.17605/OSF.IO/XPA4S).
