# Complete companion coverage: CRT

The complete companion contains 95 entries in manuscript reading order. Entry identifiers are not numerically sequential. This register maps every entry to its source locator.

Exact basis: public-data preprint v1, DOI [10.5281/zenodo.23486177](https://doi.org/10.5281/zenodo.23486177), including Appendices A-D. The frozen TeX SHA-256 is `458469112b59d68ab6deda48fc205b3679e36568494453d4ca9933dd11ea0e93`; line numbers below refer to that source, not the PDF viewer. The source PDF SHA-256 is `9427b16d36adaab1eb6119a106476bc4d054340d73fea2760ce82f01dad3685d`.

The map covers substantive text and identifies structural exclusions. Bibliography entries, TeX layout commands and repeated formatting are not separately taught as scientific claims. Figures, tables, methods, findings, limitations and declarations are addressed in the passage units below.

## Entry register

### E1. The headline coverage numbers: a range, not a single win
Manuscript lines 57-59. Abstract, the sentence reporting boundary-censored coverage of 0.26 to 0.29 under simple randomization against 0.28 to 0.48 under the two-criterion contamination-resilient design, allocating individual sites, across eight candidate pools (nominal coverage is 0.95), together with the later abstract sentence saying these figures assume no between-site variance.

### E2. What the public-data edition is and is not
Manuscript lines 57-59. Abstract, the closing sentences declaring that assignments and effects are simulated while the geography and survey counts are real, and naming the Yemen cholera and Louisiana COVID-19 corroborating geographies.

### E4. Contamination and bias toward the null
Manuscript lines 67-67. Introduction, the opening paragraph, where bidirectional spillover across cluster boundaries is described as biasing treatment effect estimates toward the null.

### E5. SUTVA, partial interference, and the estimand
Manuscript lines 67-71. Introduction, the opening paragraph stating SUTVA together with the later paragraph that adopts the exposure-mapping machinery of the interference literature (not partial interference, which the paper sets aside in the estimand subsection) to define the boundary-insulated effect as the target estimand.

### E6. Balance is not contamination control
Manuscript lines 69-71. Introduction, the paragraph criticizing geographic buffering and Euclidean distance-based partitioning together with the following literature paragraph, where covariate balance is said not to control contamination bias.

### E7. Positioning among prior work and the anchoring limit
Manuscript lines 71-71. Introduction, the literature-synthesis paragraph that runs through the Leung boundary-estimator lineage and the Watson et al. identification result and closes with the spatial-analysis contamination models, which it presents as analysis-side alternatives to the gravity-flux model, neither nesting the other.

### E71. The framework's objective and its three components
Manuscript lines 73-73. Introduction, the short paragraph that closes the framing material and states in one sentence what the optimization framework is and what it optimizes, just before the Interaction-Aware Feature Space subsection.

### E52. What the expanded feature space does not guarantee
Manuscript lines 75-78. Introduction, the Interaction-Aware Feature Space subsection, the paragraph stating what the expanded covariate space fixes and what it leaves unresolved.

### E53. Building the analytic site set, and what "water proximity" really is
Manuscript lines 80-82. Study Data and Context, the opening paragraph that builds the analytic site set stage by stage and discloses the elevation-rank stand-in for water proximity.

### E8. The public malaria geography: real sites, simulated trial
Manuscript lines 82-82. Study Data and Context, the opening paragraph describing the Malaria Atlas Project survey points, the filters that yield 57 analytic sites, and the simulated allocation imposed on that real geography.

### E9. Engineered eco-epidemiological interaction covariates
Manuscript lines 84-91. Study Data and Context, the paragraph defining the baseline covariate matrix, the numbered list of the two eco-epidemiological interaction terms, and the sentence after it saying where those terms enter.

### E10. Two distance rulers: standardized coordinates for search, great-circle distance for scoring
Manuscript lines 93-93. Study Data and Context, the closing paragraph on the dual-resolution distance architecture and the standardized clustering space.

### E54. The workflow figure: the pipeline before its parts
Manuscript lines 98-130. Methods, the opening sentence of the section together with the workflow figure it sends the reader to before any single stage is defined.

### E72. Within-stratum partitioning across convex and non-convex families
Manuscript lines 134-143. Methods, the Algorithmic Selection and Clustering Strategy subsection: its opening sentence, which says why more than one clustering family is evaluated, together with the paragraph that routes the standardized distance matrix into those families.

### E43. Equation 1: candidate partitions are generated on standardized coordinates
Manuscript lines 136-141. Methods, the Algorithmic Selection and Clustering Strategy subsection, the paragraph defining the standardized-coordinate clustering distance and the equation that follows it.

### E11. Pre-set design gates: cluster counts and singleton rejection
Manuscript lines 145-149. Methods, the Algorithmic Selection and Clustering Strategy subsection, the bulleted list of pre-scoring operational constraints on cluster count and singleton rejection.

### E55. Hard filters, and the guardrail the composite runs without here
Manuscript lines 145-150. Methods, the Algorithmic Selection and Clustering Strategy subsection, the operational-constraint list and the sentence closing it that calls the two constraints hard filters and describes the further thresholds the same layer would accept.

### E12. Five candidate generators, one graph-based outlier
Manuscript lines 152-208. Methods, the Algorithmic Selection and Clustering Strategy subsection, the catalog of the five candidate-generating algorithms and the retry-and-jitter paragraph that closes it.

### E56. Core distance, mutual reachability, and which ruler HDBSCAN uses
Manuscript lines 211-215. Methods, the HDBSCAN subsection, the paragraph that introduces the mutual reachability distance and, immediately after the equation, defines its core-distance and Euclidean terms and names the kilometer coordinate space the algorithm is run in.

### E13. HDBSCAN tried, then excluded on operational grounds
Manuscript lines 211-217. Methods, the HDBSCAN subsubsection, the paragraphs defining the method and reporting the screening run that disqualified it.

### E14. CRITIC and entropy weights fused in log space; the third leg sets only the exponent
Manuscript lines 221-244. Methods, the Ensemble Weighting Framework subsection through its Geometric Mean Fusion subsubsection, from the CRITIC and entropy definitions to the fused weights and their reported range.

### E15. Three pillars of the ten-metric suite
Manuscript lines 246-388. Methods, the subsection "The 10-Metric Diagnostic Suite", the framing paragraph that names the three pillars and says which of its metrics carry the inferential results, together with the itemized pillar lists that follow it.

### E16. Contamination AUC across mosquito flight scales
Manuscript lines 309-335. Methods, the 10-Metric Diagnostic Suite, Pillar 3 "Contamination Resilience", the Contamination AUC item and its flight-scale sweep.

### E57. Integrating frontier risk over buffer radii
Manuscript lines 348-360. Methods, the ten-metric suite under Pillar 3 'Contamination Resilience', the Frontier Risk (Buffer Depth AUC) item, the closing step that sweeps the buffer radius, integrates the frontier ratio trapezoidally into one number, and defines the symbols of that integral.

### E17. Mobility leakage via a gravity model
Manuscript lines 362-385. Methods, the 10-Metric Diagnostic Suite, Pillar 3 "Contamination Resilience", the Mobility Network Leakage AUC item and its gravity-model friction sweep.

### E18. Directed flux: sources, sinks, and net leakage
Manuscript lines 390-406. Methods, the paragraph headed "Directed contamination connectedness" that follows the 10-Metric Diagnostic Suite and refines the symmetric mobility metric into a source/sink accounting.

### E84. Reading the directed source and sink map
Manuscript lines 408-413. Methods, Section 3.3, the figure and caption showing the three-dimensional directed connectedness map of the Uganda survey points, placed after the paragraph that defines the directed flux.

### E19. Metric weighting, the leave-one-out ablation, and the equal-weight check
Manuscript lines 415-424. Methods, the subsection "Objective Metric Weighting and Ablation Validation", from its opening through the paragraph reporting the leave-one-out ablation and the equal-weight check.

### E20. The composite is a ranking, not a test
Manuscript lines 428-437. Methods, the subsection 'Selection Score and Global Optimality Index Computation', the paragraph standardizing each metric against the Monte Carlo null together with the Selection Score definition that follows it.

### E21. The optimality index is a reporting scale, not a second criterion
Manuscript lines 439-443. Methods, the subsection 'Selection Score and Global Optimality Index Computation', the closing paragraph that defines the Global Optimality Index as a min-max rescaling of the Selection Score, immediately before the estimand section.

### E58. The deduplicated candidate set: identical allocations counted once
Manuscript lines 439-443. Methods, the subsection 'Selection Score and Global Optimality Index Computation', the closing paragraph that defines the structurally deduplicated candidate set and rescales the Selection Score min-max onto the bounded 0-100 optimality index, then defines the elite pool from which a trial's allocation is drawn at random.

### E22. The decisive question: does the design improve inference?
Manuscript lines 445-447. The opening of the section 'Estimand and Operating Characteristics', the paragraph posing the decisive question of whether the optimized design improves inference and announcing the simulation on real malaria survey geography.

### E23. Exposure mapping and the boundary-insulated effect
Manuscript lines 450-454. The subsection 'The target estimand under spatial interference', the opening paragraph defining the cross-arm exposure from the gravity kernel and the displayed estimand.

### E24. Approximate recovery: bias reduced, not eliminated
Manuscript lines 451-454. The subsection 'The target estimand under spatial interference', the closing sentences just after the estimand equation, on approximate recovery in the core zone, the attenuated naive contrast, and the three tools that attack the contamination term.

### E25. Answering the caution against partial interference
Manuscript lines 456-456. Estimand and Operating Characteristics, the target-estimand subsection, the paragraph headed 'On the interference structure.'

### E26. The aliasing result: kernel shape is identified, level is not
Manuscript lines 458-467. Estimand and Operating Characteristics, the target-estimand subsection, the opening sentences of the paragraph headed 'On anchoring.'

### E27. The core-zone estimator is an anchored estimator
Manuscript lines 458-467. Estimand and Operating Characteristics, the target-estimand subsection, the middle of the paragraph headed 'On anchoring,' where the boundary-censored estimator is read as an anchored estimator.

### E28. The shape term, now probed, and the claim's exact boundary
Manuscript lines 458-467. Estimand and Operating Characteristics, the target-estimand subsection, the closing sentences of the paragraph headed 'On anchoring.'

### E29. What the operating-characteristics simulation is
Manuscript lines 469-470. Estimand and Operating Characteristics, the operating-characteristics simulation subsection, its opening specification paragraph.

### E44. How the three designs are built, and the caveat on what is randomized
Manuscript lines 472-474. Estimand and Operating Characteristics, the operating-characteristics simulation subsection, the paired paragraphs "Design implementation, and what is randomized here" and "A caveat on the unit of randomization."

### E30. Monte-Carlo precision and the three-MCSE rule
Manuscript lines 476-476. Estimand and Operating Characteristics, the operating-characteristics simulation subsection, the paragraph headed "Monte-Carlo precision."

### E31. Balance control is not contamination control
Manuscript lines 478-501. Estimand and Operating Characteristics, the operating-characteristics simulation subsection, the design-contrast paragraph on flux and imbalance together with the moderate-contamination operating-characteristics table it introduces.

### E32. Calibration at c=0, Type-I inflation, and why randomization inference
Manuscript lines 503-530. Estimand and Operating Characteristics, the operating-characteristics simulation subsection, the contamination-strength sensitivity and calibration table through conclusion (i) of the four-conclusions paragraph.

### E33. The four conclusions and the complementarity claim
Manuscript lines 530-538. Estimand and Operating Characteristics, the operating-characteristics simulation subsection, the paragraph beginning "Four conclusions follow" that runs through the complementarity of design and analysis to the central-result claim and the three boundaries placed on it.

### E34. The contamination-only ablation: directionally ahead at one estimator, comparable at one, worse at the third
Manuscript lines 540-550. Estimand and Operating Characteristics, the paragraph decomposing the design objective into a contamination-only baseline, through the sentence reporting the naive-estimator penalty on the malaria geography.

### E35. COVID and cholera: the same balance price, different naive orderings
Manuscript lines 551-560. Estimand and Operating Characteristics, the later half of the contamination-only-baseline paragraph, where the COVID and cholera geographies are reported and the three implications are drawn.

### E73. Bold marks and the Type-I column in the ablation table
Manuscript lines 562-578. Estimand and Operating Characteristics, the contamination-only baseline subsection, the table that closes it together with its caption.

### E36. Why two more geographies
Manuscript lines 581-583. Main text, the opening of the section on generalization to other connected systems: the subsection heading and its introductory paragraph.

### E74. The cholera testbed's main-text verdict
Manuscript lines 585-585. Main text, the section on generalization to other connected systems, the first testbed paragraph, headed as a real waterborne epidemic at Yemeni governorate scale.

### E59. The Louisiana verdict: bias transfers, precision improves, direction does not pay
Manuscript lines 587-607. Main text, the section on generalization to other connected systems, the paragraph on the early-2020 COVID-19 Louisiana testbed, whose second half gives the source/sink reading of the directed flux and what each design achieves on that geography.

### E91. AI tools, stated where the methods are
Manuscript lines 609-611. The close of the Estimand and Operating Characteristics section, the short subsection Use of AI Tools, just before Results.

### E60. How the candidate pool was built, and which method-by-K pairs survived
Manuscript lines 619-619. Results, the first subsection 'Combinatorial Yield and Multi-Objective Selection', its opening paragraph describing how candidate allocations were enumerated and which clustering-method by resolution combinations remained feasible.

### E75. How to read the composite-score boxplot
Manuscript lines 621-626. Results, the Combinatorial Yield and Multi-Objective Selection subsection, the composite-score boxplot figure and its caption, placed just after the paragraph describing how the candidate pool was enumerated.

### E3. The selected design: Spectral K=8, and why K=8 dominates the elite pool
Manuscript lines 628-628. Results, the Combinatorial Yield and Multi-Objective Selection subsection, the paragraph reporting the selected Spectral Clustering K=8 configuration, its Optimality Index, and the K=8 dominance of the elite pool.

### E61. The winning design, the elite pool it came from, and why the win is not a test
Manuscript lines 628-628. Results, the subsection on combinatorial yield and multi-objective selection, the paragraph naming the selected Spectral K=8 configuration, the elite pool it came from, and the ranking-not-a-test caveat.

### E62. The standardized-gain radar: favorable on all ten metrics
Manuscript lines 631-640. Results, the subsection on the configuration and performance profile, the paragraph reading the standardized-gain radar together with the radar figure it interprets.

### E45. The selected design in raw units, including an unequal split
Manuscript lines 642-675. Results, the configuration and performance profile subsection: the table giving the selected design in raw units together with the stabilization-of-statistical-interchangeability paragraph that follows it.

### E76. The topological and contamination pillars, and the correction that changed the winner
Manuscript lines 677-681. Results, the configuration and performance profile subsection, the second and third pillar paragraphs, on topological and spatial cohesion and on contamination resilience and cross-arm exposure control.

### E77. The optimization profile and its no-trade-off reading
Manuscript lines 683-693. Results, the opening of the standardized effect sizes and structural trade-offs subsection, the paragraph that reads the optimization profile figure together with the figure itself.

### E78. The trade-off heatmap and the case for ensemble weighting
Manuscript lines 695-702. Results, the standardized effect sizes and structural trade-offs subsection, the paragraph headed Cross-Configuration Trade-offs together with the heatmap figure it introduces.

### E79. The perimeter trade-off that favors coarser partitions
Manuscript lines 704-704. Results, the Standardized Effect Sizes and Structural Trade-offs subsection, the closing paragraph after the metric trade-offs heatmap, which reports resolution dependency across the surviving method-by-resolution combinations.

### E80. Resolution against insulation as the standing trade-off
Manuscript lines 706-708. Discussion and Conclusions, the section heading together with its opening paragraph, the one naming the resolution-versus-insulation tension and the composite margin over the best Ward partition.

### E81. Marginal influence, not statistical independence
Manuscript lines 710-710. Discussion and Conclusions, the paragraph that restates the leave-one-out ablation of the ten-metric composite and then qualifies what that ablation can and cannot show, immediately after the paragraph on the selected spectral configuration.

### E46. Six selection objectives compared at the cluster level
Manuscript lines 712-745. Discussion and Conclusions, the paragraph comparing six design-selection objectives at the cluster level together with the operating-characteristics table it presents.

### E51. Robustness as a specification multiverse, and what was not varied
Manuscript lines 752-758. Discussion and Conclusions, the paragraph titled "Robustness as a specification multiverse", just before the Limitations subsection.

### E47. Nine limitations, in the paper's own words
Manuscript lines 760-772. Discussion and Conclusions, the Limitations subsection, its lead sentence and the numbered list of nine limitations.

### E82. Three residual risks and their analysis-stage answers
Manuscript lines 774-804. Discussion and Conclusions, the analytical risk mitigation subsection, its opening paragraph and the three-row table of analytical countermeasures that the paragraph introduces.

### E63. Why an all-positive profile still leaves operational risk
Manuscript lines 808-808. Discussion, the operational risk mitigation subsection, the two-sentence paragraph that introduces the operational countermeasures table.

### E64. The contiguity row: one connected treatment arm, and what b0 does not certify
Manuscript lines 810-835. Discussion, the operational risk mitigation subsection, the operational countermeasure table and its Euler Characteristic (Contiguity) row.

### E65. Population balance as a field-recruitment risk
Manuscript lines 810-835. Discussion, the operational risk mitigation subsection, the operational countermeasure table and its Population Balance (Mean Parity) row.

### E66. Phased rollout as the field answer to long-range dispersal risk
Manuscript lines 810-835. Discussion, the subsection on operational risk mitigation, the Spatial Mixing (Long-Range Sensitivity) row of the operational field-countermeasures table, which pairs the residual long-range-dispersal risk with the phased-rollout countermeasure.

### E83. The conflict-of-interest declaration and its narrow reach
Manuscript lines 837-838. Back matter, the Conflict of Interest section, its heading and the single declarative sentence that follows it.

### E67. The reproducibility statement: where every number comes from
Manuscript lines 841-841. Back matter, the "Reproducibility and Data Availability" section, its single paragraph tracing each dataset, figure, and table to a deposited file.

### E85. Ethics, funding, and AI-use declarations
Manuscript lines 844-858. Back matter, the closing declaration sections that follow the Reproducibility and Data Availability statement and precede the bibliography: Ethics, then Funding, then Acknowledgments, then Use of AI-assisted technology.

### E68. The dual-mitigation appendix: why a winner still carries risk
Manuscript lines 868-868. Appendix "Comprehensive dual-mitigation framework for sub-optimal dimensions," its opening paragraph explaining why the appendix exists and when to use it.

### E86. Three balance failures, and their paired repairs
Manuscript lines 870-894. Appendix "Comprehensive dual-mitigation framework for sub-optimal dimensions," the subsection headed Pillar 1: statistical interchangeability, covering its numbered items on population balance, Wasserstein distance, and density symmetry.

### E87. Pillar 2 countermeasures for fragmentation, terrain and boundary fit
Manuscript lines 896-927. Appendix "Comprehensive dual-mitigation framework for sub-optimal dimensions," the subsection headed Pillar 2 on topological and spatial cohesion, running from the Euler Characteristic (Contiguity) item through the Variational Free Energy item.

### E88. Countermeasures for vector, frontier and mobility leakage
Manuscript lines 929-953. Appendix "Comprehensive dual-mitigation framework for sub-optimal dimensions," the Pillar 3 subsection on contamination resilience, the three numbered entries for Contamination AUC, Frontier Risk and Mobility Network Leakage.

### E69. What the two testbeds hold fixed, and what they leave out
Manuscript lines 958-958. Appendix "Generalization testbeds: specifications and results," its opening paragraph setting the shared ground rules before either the cholera or COVID testbed is described.

### E37. Yemen cholera: real map, simulated trial
Manuscript lines 962-985. Appendix "Generalization testbeds: specifications and results", the Yemen cholera subsection, the "Data and geography" and "Contamination kernel and design" paragraphs together with the governorate centroid table.

### E70. The cholera testbed's contamination kernel and design pool
Manuscript lines 964-964. Appendix "Generalization testbeds," the Yemen cholera subsection, the "Contamination kernel and design" paragraph between the data-and-geography paragraph and the governorate centroid table.

### E38. Cholera operating characteristics
Manuscript lines 987-1023. Appendix "Generalization testbeds: specifications and results", the Yemen cholera subsection, its two operating-characteristics tables and the "Findings" paragraph that reads them.

### E39. The cholera Type-I caveat, traced to the contamination blend
Manuscript lines 1023-1023. Appendix, the Yemen cholera testbed subsection, the closing 'Findings' paragraph, where the naive test's mild size inflation is discussed and traced to the contamination blend.

### E40. COVID Louisiana: directed geometry, confirmed cases
Manuscript lines 1027-1049. Appendix "Generalization testbeds: specifications and results", the Louisiana COVID-19 subsection, the "Data, geography and kernel" paragraph.

### E89. Reading the Louisiana operating-characteristics grid
Manuscript lines 1051-1076. Appendix "Generalization testbeds: specifications and results", the Louisiana COVID-19 subsection, the moderate-contamination operating-characteristics table and its caption, sitting between the data-geography-and-kernel paragraph and the naive-ITT coverage sweep table.

### E41. The c = 0 calibration check
Manuscript lines 1078-1093. Appendix, the Louisiana COVID-19 testbed subsection, the naive-ITT coverage sweep table and the first 'Findings' paragraph that follows it.

### E42. Bias transfers; the directed objective backfires
Manuscript lines 1095-1112. Appendix, the Louisiana COVID-19 testbed subsection, the two closing 'Findings' paragraphs on the symmetric design's bias gains and on the directed objective.

### E48. Kernel misspecification: what holds and what breaks
Manuscript lines 1116-1118. Appendix, Sensitivity analyses, the opening paragraph together with the 'Kernel misspecification' paragraph.

### E50. Censoring fraction and elite pool size
Manuscript lines 1120-1120. Appendix, Sensitivity analyses, the 'Censoring fraction and elite pool size' paragraph.

### E49. Between-pool variability: why the headline is a range
Manuscript lines 1122-1201. The sensitivity-analyses appendix, the paragraph headed "Between-pool variability" together with the eight-seed between-pool variability table it reports.

### E90. The six-objective table at every contamination strength
Manuscript lines 1203-1242. Appendix, the sensitivity-analyses section, the full six-objective operating-characteristics table together with its caption, which follow the short paragraph on selection objectives across contamination.

### E92. Adding variation between sites: which analyses stay honest
Manuscript lines 1246-1250. The last appendix, Between-Site and Between-Cluster Heterogeneity: its opening paragraph and the paragraph headed Calibration.

### E93. Site allocation with variation between sites
Manuscript lines 1252-1252. The last appendix, the paragraph headed Site allocation under contamination.

### E94. Whole clusters: the composite against fair comparators
Manuscript lines 1254-1254. The last appendix, the paragraph headed Whole-cluster allocation.

### E95. Reading the two heterogeneity tables
Manuscript lines 1256-1323. The last appendix, the two tables after its three paragraphs: site-level allocation with between-site variation, then whole-cluster allocation with between-cluster variation.

## Edition relationship

The concise study guide selects the central distinctions and adds answered teaching calculations. It does not claim the coverage of this full walkthrough. Neither edition updates automatically when the manuscript changes. The full companion uses the six-field teaching grammar, including a prompt in every entry. The reader entry and short guide provide additional answered self-checks.
