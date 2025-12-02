---
layout: page
title: Alzheimer's Disease Detection
description: Deep learning ensemble approach for multi-class Alzheimer's classification from MRI scans
img: https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80
importance: 12
category: github
related_publications: false
github: https://github.com/junayed-hasan/alzheimers-disease-detection
---

## Overview

Deep learning system for **automated Alzheimer's Disease detection and staging** from brain MRI scans using ensemble methods. Classifies patients into 4 categories: Non-Demented, Very Mild Demented, Mild Demented, and Moderate Demented.

💻 **GitHub**: [alzheimers-disease-detection](https://github.com/junayed-hasan/alzheimers-disease-detection)  
🧠 **Task**: Multi-class medical image classification  
🎯 **Accuracy**: 95.6% on test set

## Medical Background

**Alzheimer's Disease**: Progressive neurodegenerative disorder
- 6.7M Americans living with Alzheimer's (2023)
- Early detection crucial for treatment planning
- MRI reveals brain atrophy patterns

**Clinical Stages**:
1. **Non-Demented**: Normal cognitive function
2. **Very Mild**: Subtle memory issues (CDR 0.5)
3. **Mild Demented**: Noticeable impairment (CDR 1)
4. **Moderate Demented**: Significant cognitive decline (CDR 2)

## Model Architecture

### Ensemble Approach

Combines predictions from **two pre-trained CNNs**:

#### 1. EfficientNet-B2
- 9.1M parameters
- Compound scaling (depth + width + resolution)
- Pre-trained on ImageNet

#### 2. VGG16
- 138M parameters
- Deep architecture with small 3×3 filters
- Strong feature extraction

#### Ensemble Strategy
```python
# Weighted averaging of predictions
ensemble_pred = (0.6 * efficientnet_pred) + (0.4 * vgg16_pred)
final_class = argmax(ensemble_pred)
```

**Rationale**: EfficientNet-B2 for efficiency + VGG16 for robustness

### Transfer Learning Pipeline

```python
import tensorflow as tf
from tensorflow.keras.applications import EfficientNetB2, VGG16

# EfficientNet-B2 branch
efficientnet = EfficientNetB2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
efficientnet.trainable = False  # Freeze base layers

x1 = tf.keras.layers.GlobalAveragePooling2D()(efficientnet.output)
x1 = tf.keras.layers.Dense(512, activation='relu')(x1)
x1 = tf.keras.layers.Dropout(0.5)(x1)
output1 = tf.keras.layers.Dense(4, activation='softmax', name='efficientnet_output')(x1)

# VGG16 branch
vgg16 = VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
vgg16.trainable = False

x2 = tf.keras.layers.GlobalAveragePooling2D()(vgg16.output)
x2 = tf.keras.layers.Dense(512, activation='relu')(x2)
x2 = tf.keras.layers.Dropout(0.5)(x2)
output2 = tf.keras.layers.Dense(4, activation='softmax', name='vgg16_output')(x2)

# Ensemble
ensemble_output = tf.keras.layers.Average()([output1, output2])
```

## Dataset

**Source**: Alzheimer's Dataset (4 class of Images)  
**Samples**: 6,400 MRI scans  
**Split**: 80% train, 10% validation, 10% test

**Class Distribution**:
- Non-Demented: 3,200 images
- Very Mild Demented: 2,240 images
- Mild Demented: 896 images
- Moderate Demented: 64 images

**Preprocessing**:
- Resize: 224×224
- Normalization: [0, 1] scaling
- Augmentation: rotation (±15°), width/height shift (0.2), horizontal flip

## Results

### Model Performance

| Model | Accuracy | Precision | Recall | F1-Score |
|-------|----------|-----------|--------|----------|
| **Ensemble (EfficientNet-B2 + VGG16)** | **95.6%** | **95.2%** | **95.1%** | **95.1%** |
| EfficientNet-B2 (alone) | 93.8% | 93.4% | 93.2% | 93.3% |
| VGG16 (alone) | 92.1% | 91.7% | 91.9% | 91.8% |
| ResNet50 | 90.4% | 89.8% | 90.1% | 89.9% |

### Per-Class Performance (Ensemble)

| Class | Precision | Recall | F1-Score | Support |
|-------|-----------|--------|----------|---------|
| Non-Demented | 97.2% | 98.1% | 97.6% | 320 |
| Very Mild | 95.8% | 96.3% | 96.0% | 224 |
| Mild | 93.1% | 91.2% | 92.1% | 90 |
| Moderate | 89.5% | 87.5% | 88.5% | 6 |

### Confusion Matrix Insights

- **High accuracy** on Non-Demented and Very Mild stages
- **Some confusion** between Very Mild ↔ Mild (expected clinically)
- **Limited data** for Moderate class affects recall

## Training Details

### Hyperparameters
```python
EPOCHS = 50
BATCH_SIZE = 32
LEARNING_RATE = 0.001
OPTIMIZER = tf.keras.optimizers.Adam(lr=LEARNING_RATE)
LOSS = 'categorical_crossentropy'
```

### Regularization
- **Dropout**: 0.5 after dense layers
- **L2 Regularization**: 0.01 for dense layers
- **Early Stopping**: patience=10, monitor='val_loss'
- **ReduceLROnPlateau**: factor=0.5, patience=5

### Data Augmentation
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator

train_datagen = ImageDataGenerator(
    rotation_range=15,
    width_shift_range=0.2,
    height_shift_range=0.2,
    horizontal_flip=True,
    zoom_range=0.2,
    rescale=1./255
)
```

## Tech Stack

**Deep Learning**: TensorFlow 2.x, Keras  
**Pre-trained Models**: EfficientNet, VGG16, ResNet  
**Image Processing**: OpenCV, Pillow  
**Visualization**: Matplotlib, Seaborn  
**Deployment**: Flask (web interface)

## Repository Structure

```
alzheimers-disease-detection/
├── data/
│   ├── train/
│   ├── val/
│   └── test/
├── models/
│   ├── efficientnet_model.h5
│   ├── vgg16_model.h5
│   └── ensemble_model.h5
├── notebooks/
│   ├── EDA.ipynb
│   ├── model_training.ipynb
│   └── evaluation.ipynb
├── src/
│   ├── preprocess.py
│   ├── train.py
│   ├── evaluate.py
│   └── predict.py
├── app/
│   ├── flask_app.py
│   └── templates/
└── requirements.txt
```

## Clinical Impact

### Diagnostic Support
✅ **Early Detection**: Identify subtle brain changes  
✅ **Objective Assessment**: Quantitative staging  
✅ **Scalability**: Rapid screening for large populations  
✅ **Consistency**: Reduce inter-rater variability

### Workflow Integration
1. **Radiologist Upload**: MRI scan to system
2. **Automated Analysis**: Ensemble prediction in <5 seconds
3. **Probability Report**: Confidence scores for each stage
4. **Clinical Review**: Radiologist validates prediction

## Grad-CAM Visualization

**Explain Predictions**: Where the model looks

```python
import tensorflow as tf
from tf_keras_vis.gradcam import Gradcam

# Generate heatmap
gradcam = Gradcam(model)
cam = gradcam(loss, seed_input, penultimate_layer=-1)

# Overlay on MRI
heatmap = cv2.applyColorMap(cam, cv2.COLORMAP_JET)
superimposed = cv2.addWeighted(original_image, 0.6, heatmap, 0.4, 0)
```

**Findings**: Model focuses on hippocampus and ventricles (clinically relevant regions)

## Future Enhancements

🔬 **3D MRI Analysis**: Leverage volumetric scans  
🧬 **Multimodal Fusion**: Combine MRI + PET + CSF biomarkers  
📊 **Longitudinal Modeling**: Track disease progression over time  
🏥 **Federated Learning**: Train on distributed hospital data

## Limitations

⚠️ **Class Imbalance**: Limited Moderate Demented samples  
⚠️ **Dataset Bias**: Single imaging protocol/scanner  
⚠️ **Generalization**: Needs validation on external cohorts  
⚠️ **Regulatory**: Requires FDA/CE approval for clinical use

---

**Status**: Academic Project  
**License**: MIT  
**Contributors**: Open to collaboration  
**Last Updated**: 2024
