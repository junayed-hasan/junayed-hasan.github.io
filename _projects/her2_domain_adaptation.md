---
layout: page
title: HER2 Domain Adaptation
description: Extending HER2 biomarker detection from breast cancer to 7 cancer types using domain adaptation and transfer learning
img: https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80
importance: 2
category: industry
giscus_comments: false
---

## Overview

This research project at Mayo Clinic extends **HER2 biomarker detection** from breast cancer-only applications to **7 different cancer types** using advanced domain adaptation techniques, achieving **>90% accuracy** across all domains and reducing **manual pathologist assessment time by >75%**.

## Background: HER2 Biomarker

**Human Epidermal Growth Factor Receptor 2 (HER2)** is a critical biomarker in oncology:
- Overexpression correlates with aggressive tumor behavior
- Guides targeted therapy decisions (e.g., Herceptin/trastuzumab)
- Traditionally assessed through immunohistochemistry (IHC) and FISH testing
- Manual pathologist review is time-consuming and subject to inter-observer variability

## Problem Statement

### Challenge
Existing HER2 detection models are trained exclusively on **breast cancer histopathology images** and fail to generalize to other cancer types due to:
- **Domain shift**: Different tissue morphology and staining patterns
- **Limited labeled data**: Expensive pathologist annotations for each cancer type
- **Computational resources**: Training separate models for each domain is inefficient

### Goal
Develop a **domain adaptation framework** that transfers knowledge from breast cancer HER2 detection to multiple cancer types without requiring extensive re-labeling or retraining.

## Solution: Multi-Domain Transfer Learning

### Architecture

1. **Source Domain**: Breast Cancer HER2 Detection
   - Pre-trained ResNet-50 on 10,000+ annotated breast cancer slides
   - Achieved 96% accuracy on breast cancer validation set
   - Feature extractor frozen for transfer learning

2. **Target Domains** (7 cancer types):
   - Gastric cancer
   - Colorectal cancer
   - Ovarian cancer
   - Lung cancer
   - Bladder cancer
   - Esophageal cancer
   - Uterine cancer

3. **Domain Adaptation Techniques**:
   - **Adversarial Domain Adaptation**: Domain-invariant feature learning
   - **Maximum Mean Discrepancy (MMD)**: Minimize distribution shift
   - **Self-supervised pre-training**: Contrastive learning on unlabeled slides
   - **Fine-tuning with limited labels**: 100-500 labeled samples per domain

### Training Pipeline

```
Breast Cancer Dataset (10K+ slides)
         ↓
   ResNet-50 Backbone
         ↓
Domain-Adversarial Training
         ↓
Feature Alignment (MMD Loss)
         ↓
Fine-tuning on Target Domains
         ↓
Evaluation on 7 Cancer Types
```

## Technical Implementation

### Data Preprocessing
- **Whole Slide Imaging (WSI)** at 40x magnification
- Patch extraction (512×512 pixels) with overlapping windows
- Color normalization using Reinhard method
- Data augmentation: rotation, flipping, color jittering

### Model Architecture
- **Backbone**: ResNet-50 pre-trained on ImageNet + breast cancer
- **Domain Discriminator**: 3-layer MLP for adversarial training
- **Feature Alignment**: MMD kernel with Gaussian RBF
- **Classification Head**: 2-layer FC network (HER2+ vs HER2-)

### Training Strategy
- **Phase 1**: Supervised training on breast cancer (source domain)
- **Phase 2**: Adversarial adaptation with unlabeled target slides
- **Phase 3**: Fine-tuning with limited labeled samples (100-500 per domain)
- **Optimizer**: AdamW with learning rate scheduling
- **Loss Function**: Cross-entropy + adversarial + MMD

## Results & Performance

### Accuracy Across Cancer Types

| Cancer Type | Accuracy | F1-Score | AUC-ROC |
|-------------|----------|----------|---------|
| Breast (Source) | 96.2% | 0.961 | 0.982 |
| Gastric | 92.4% | 0.918 | 0.956 |
| Colorectal | 91.8% | 0.912 | 0.948 |
| Ovarian | 93.1% | 0.925 | 0.962 |
| Lung | 90.6% | 0.899 | 0.941 |
| Bladder | 91.2% | 0.907 | 0.945 |
| Esophageal | 92.9% | 0.922 | 0.958 |
| Uterine | 93.5% | 0.929 | 0.964 |

**Average across all domains**: **>90% accuracy**

### Clinical Impact

✅ **Time Savings**: Reduced manual pathologist review time by **>75%**  
✅ **Consistency**: Eliminated inter-observer variability  
✅ **Scalability**: Single model supports 7+ cancer types  
✅ **Cost Efficiency**: No need for extensive labeling for each new domain  
✅ **Clinical Validation**: Concordance with pathologist ground truth >92%

### Comparison with Baselines

| Approach | Avg Accuracy | Training Time | Labeled Samples Needed |
|----------|--------------|---------------|------------------------|
| **Domain Adaptation (Ours)** | **91.8%** | **8 hours** | **100-500 per domain** |
| Train from Scratch | 78.3% | 24 hours | 5,000+ per domain |
| Fine-tune Only | 84.6% | 12 hours | 1,000+ per domain |
| No Adaptation (Direct Transfer) | 72.1% | N/A | 0 |

## Technical Stack

**Deep Learning**: PyTorch, torchvision, timm  
**Medical Imaging**: OpenSlide, Pillow, scikit-image  
**Domain Adaptation**: PyTorch Domain Library, MMD implementations  
**Data Processing**: NumPy, Pandas, OpenCV  
**Cloud Infrastructure**: Google Cloud Vertex AI, Compute Engine  
**Visualization**: Matplotlib, Seaborn, Plotly  
**Experiment Tracking**: Weights & Biases, TensorBoard

## Key Innovations

1. **Multi-Domain Transfer**: First study to extend HER2 detection across 7 cancer types
2. **Label Efficiency**: Achieved >90% accuracy with only 100-500 samples per domain
3. **Adversarial + MMD**: Hybrid domain adaptation outperforms single-method approaches
4. **Clinical Integration**: Seamless integration into pathology workflows

## Collaboration

Worked closely with:
- **Pathologists** for ground truth annotations and clinical validation
- **Oncologists** for treatment decision integration
- **Bioinformatics Teams** for genomic data correlation
- **IT Infrastructure** for secure deployment in clinical environments

## Future Directions

- **Additional Cancer Types**: Expanding to pancreatic, prostate, and head/neck cancers
- **Multi-Task Learning**: Simultaneous prediction of HER2, ER, PR, and Ki-67 biomarkers
- **Weakly Supervised Learning**: Reduce annotation requirements using slide-level labels
- **Real-Time Inference**: Deploy on edge devices for intraoperative decision support
- **Publication**: Manuscript in preparation for submission to top medical imaging journal

## Publication Plans

**Target Journal**: *Medical Image Analysis* or *Nature Medicine*  
**Expected Submission**: Q4 2025  
**Co-authors**: Mayo Clinic pathologists, bioinformatics team, ML researchers

---

**Status**: Research Complete - Publication in Preparation  
**Organization**: Mayo Clinic, Rochester, MN  
**Role**: Data Science Intern - Research Engineer  
**Duration**: May 2025 - Present

