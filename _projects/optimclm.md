---
layout: page
title: OptimCLM
description: Optimizing clinical language models via knowledge distillation, pruning, and quantization (IJMI 2025)
img: https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80
importance: 1
category: research
related_publications: true
---

## International Journal of Medical Informatics (2025)

OptimCLM is a comprehensive framework for compressing clinical language models while maintaining near-perfect performance. By combining ensemble distillation, pruning, and quantization, we achieved dramatic reductions in model size and latency for clinical NLP tasks.

### Key Results

- **22.9× Compression**: Reduced model size by 95% with minimal performance loss
- **28.7× Faster**: Reduced inference latency from 28.7× baseline
- **98% Performance Retention**: Maintained near-original accuracy across clinical tasks
- **State-of-the-Art**: Achieved best results on 4 clinical NLP benchmarks

### Methodology

**Three-Stage Pipeline**:
1. **Ensemble Distillation**: Transfer knowledge from 32 clinical LLMs to a compact student model
2. **Structured Pruning**: Remove redundant parameters while preserving clinical semantics
3. **INT8 Quantization**: Compress weights and activations for edge deployment

**Datasets**: EHR data, clinical outcome prediction tasks

**Framework**: PyTorch, Hugging Face Transformers

### Links

- **Paper**: [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S1386505624004271)
- **Code**: [GitHub Repository](https://github.com/junayed-hasan/Clinical-Language-Model-Distillation-Pruning-Quantization)

### Clinical Impact

This work enables deployment of sophisticated clinical language models in resource-constrained healthcare settings, making AI-powered clinical decision support accessible to hospitals with limited computational infrastructure.

---

**Status**: Published in International Journal of Medical Informatics (2025), Volume 195, 105764
**Authors**: Mohammad Junayed Hasan, Fuad Rahman, Nabeel Mohammed
