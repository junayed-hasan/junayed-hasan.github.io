---
layout: page
title: ParaCycle
description: Reinforcement learning framework for reference-free machine translation using bidirectional paraphrase consensus
img: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80
importance: 1
category: research
related_publications: true
---

## Master's Thesis - Johns Hopkins University

ParaCycle is a novel reinforcement learning framework for low-resource machine translation that eliminates dependency on parallel corpora. By using bidirectional paraphrase consensus, the system achieves improved translation quality across multiple language pairs.

### Key Contributions

- **Semantic Consistency Rewards**: Designed customized RL objectives for unsupervised quality estimation
- **Paraphrase Consensus**: Leveraged bidirectional paraphrasing to establish translation quality without reference translations
- **Low-Resource MT**: Validated on four English↔X language pairs using FLORES-200 benchmark
- **RL Formulation**: Formulated translation quality optimization as a reinforcement learning problem

### Technical Details

**Framework**: PyTorch, Hugging Face Transformers, Reinforcement Learning (SFT, DPO, GRPO)

**Evaluation**: FLORES-200 benchmark, multiple language pairs

**Advisor**: Prof. Philipp Koehn, Center for Language and Speech Processing (CLSP), JHU

### Impact

This research addresses the critical challenge of machine translation quality estimation in low-resource scenarios where parallel corpora are unavailable or limited. The paraphrase consensus approach provides a reference-free alternative that maintains translation quality while reducing data dependency.

---

**Status**: Master's thesis (Expected completion: December 2025)
