---
layout: page
title: Adult Income Prediction
description: Machine learning analysis of census data to predict individual income levels with comprehensive preprocessing and visualization
img: https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80
importance: 9
category: github
github: https://github.com/junayed-hasan/Adult-Income-Prediction-Machine-Learning
---

## Overview

A comprehensive **machine learning project** analyzing the **Adult Income Dataset** to predict individual income levels based on census data. Showcases end-to-end ML pipeline including data preprocessing, visualization, feature engineering, and predictive modeling.

💻 **GitHub**: [Adult-Income-Prediction-Machine-Learning](https://github.com/junayed-hasan/Adult-Income-Prediction-Machine-Learning)  
📊 **Dataset**: UCI Adult Census Income  
🎯 **Task**: Binary Classification (>50K vs <=50K)

## Project Highlights

### Data Exploration & Visualization
- **48,842 samples** with 14 features (age, education, occupation, etc.)
- Exploratory Data Analysis (EDA) with correlation matrices
- Distribution plots for numerical and categorical features
- Imbalanced class handling (76% <=50K, 24% >50K)

### Data Preprocessing
- **Missing Value Handling**: Imputation for '?' entries
- **Encoding**: Label encoding for ordinal, One-hot for nominal
- **Scaling**: StandardScaler for numerical features
- **Feature Engineering**: Created interaction features

### Machine Learning Models

| Model | Accuracy | Precision | Recall | F1-Score |
|-------|----------|-----------|--------|----------|
| **Random Forest** | **86.2%** | **0.741** | **0.623** | **0.677** |
| XGBoost | 85.7% | 0.726 | 0.615 | 0.666 |
| Logistic Regression | 84.3% | 0.685 | 0.598 | 0.638 |
| SVM | 83.9% | 0.672 | 0.589 | 0.628 |
| Naive Bayes | 80.1% | 0.615 | 0.552 | 0.582 |

### Feature Importance
**Top 5 Predictors**:
1. Education Level
2. Occupation
3. Age
4. Hours per Week
5. Marital Status

## Tech Stack

**ML Libraries**: Scikit-learn, XGBoost, Pandas, NumPy  
**Visualization**: Matplotlib, Seaborn, Plotly  
**Preprocessing**: Scikit-learn preprocessing, feature_engine  
**Notebook**: Jupyter

## Key Learnings

✅ Handling real-world messy census data  
✅ Dealing with class imbalance (SMOTE, class weighting)  
✅ Feature engineering for categorical data  
✅ Model comparison and hyperparameter tuning  
✅ Interpretability with feature importance

## Applications

- **HR Analytics**: Salary prediction models
- **Market Segmentation**: Income-based targeting
- **Policy Making**: Understanding income determinants
- **Financial Services**: Credit risk assessment

---

**Status**: Completed  
**Dataset**: UCI Adult Census  
**License**: MIT
