---
layout: page
title: DeepMarkerNet
description: Multi-task transformer framework for spontaneous smile recognition using Duchenne Marker supervision (PRL 2024)
img: https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=800&q=80
importance: 1
category: research
related_publications: true
---

## Pattern Recognition Letters (2024)

DeepMarkerNet leverages auxiliary supervision from the Duchenne Marker (a physiological indicator of genuine smiles) to improve automatic spontaneous smile recognition. This work secured $35K in research funding and achieved state-of-the-art results across multiple benchmarks.

### Key Achievements

- **1-3% Accuracy Improvement**: Outperformed all CNN, RNN, and transformer baselines
- **$35K Research Grant**: Secured funding through conference proposal and presentation
- **Multi-Dataset Validation**: Tested on 4 benchmark smile recognition datasets
- **Novel Architecture**: First multi-task transformer combining handcrafted and learned features

### Technical Innovation

**Architecture**: Multi-task transformer with auxiliary supervision from handcrafted Duchenne Marker features to automatic transformer features

**Key Idea**: Transfer domain knowledge (Duchenne Marker) as auxiliary task to improve primary smile recognition task

**Datasets**: UvA-NEMO, SPOS, MMDB, CK+

**Framework**: PyTorch, Vision Transformers

### Links

- **Paper**: [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0167865524002770)
- **Code**: [GitHub Repository](https://github.com/junayed-hasan/spontaneous-smile-recognition)

### Impact

DeepMarkerNet demonstrates how domain knowledge can enhance deep learning for facial expression recognition, with applications in healthcare (detecting depression, pain assessment) and human-computer interaction.

---

**Status**: Published in Pattern Recognition Letters (2024), Volume 186, pp. 148-155
**Authors**: Mohammad Junayed Hasan, Kazi Rafat, Fuad Rahman, Nabeel Mohammed, Shafin Rahman
**Funding**: $35K research grant from AdSEARCH, icddr,b for women's health research
