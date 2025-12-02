---
layout: page
title: Shadow Loss
description: Memory-linear deep metric learning reducing complexity from O(N²) to O(N) (CVPR 2026 - Under Review)
img: https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80
importance: 1
category: research
related_publications: true
---

## CVPR 2026 (Under Review)

Shadow Loss introduces a novel loss function for deep metric learning that reduces memory complexity from O(N²) to O(N), enabling efficient training on large-scale datasets while accelerating convergence by 1.5-2×.

### Key Contributions

- **O(N) Memory**: Reduced memory complexity from quadratic to linear
- **1.5-2× Faster Convergence**: Accelerated training speed significantly
- **Large-Scale Validation**: Tested on CUB-200, CARS-196, and large retrieval datasets
- **Maintained Performance**: Achieved comparable accuracy to O(N²) methods with linear memory

### Technical Innovation

**Problem**: Traditional deep metric learning methods require computing pairwise distances for all samples in a batch, leading to O(N²) memory and computational complexity

**Solution**: Shadow Loss computes a "shadow" representation that approximates full pairwise distances with O(N) complexity

**Datasets**: 
- CUB-200-2011 (fine-grained bird classification)
- Stanford Cars-196
- Large-scale image retrieval benchmarks

**Framework**: PyTorch, custom loss implementation

### Links

- **Preprint**: [arXiv:2311.14012](https://arxiv.org/abs/2311.14012)

### Impact

Shadow Loss enables training of deep metric learning models on larger batch sizes and datasets, making advanced similarity learning accessible to researchers with limited computational resources. This is particularly valuable for applications requiring fine-grained visual recognition at scale.

---

**Status**: Under Review at CVPR 2026

**Authors**: Alif Elham Khan *, Mohammad Junayed Hasan *, Humayra Anjum *, Nabeel Mohammed

*Equal contribution
