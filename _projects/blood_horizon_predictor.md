---
layout: page
title: Blood Horizon Predictor
description: Predictive blood utilization management system for enhanced transfusion medicine operations at Mayo Clinic
img: https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80
importance: 1
category: industry
giscus_comments: false
---

## Overview

**Blood Horizon Predictor** is a production-grade machine learning system deployed at Mayo Clinic to forecast blood utilization, reducing inventory waste to <1% and saving **$600K+ annually**. This full-stack healthcare analytics platform serves **500+ clinicians** with real-time predictions, integrating multiple BigQuery data pipelines and cloud infrastructure.

## Problem Statement

Blood product management is a critical challenge in healthcare:
- **High waste costs**: Expired blood products cost hospitals hundreds of thousands annually
- **Supply chain complexity**: Balancing inventory across multiple blood groups and product types
- **Patient safety**: Ensuring adequate supply for surgeries while minimizing waste
- **Manual processes**: Clinicians spending hours on manual assessment and forecasting

## Solution Architecture

### Machine Learning Pipeline

1. **Data Integration**
   - Integrated **3 BigQuery data pipelines** for blood groups, inventory levels, and surgery schedules
   - Processed historical transfusion data across 7+ years
   - Feature engineering for temporal patterns, seasonal trends, and surgical demand

2. **Predictive Models**
   - Developed ensemble ML models for multi-horizon forecasting (1-day, 3-day, 7-day)
   - Implemented time series forecasting with ARIMA, Prophet, and LSTM architectures
   - Achieved **<1% inventory waste** through accurate demand prediction

3. **Deployment Infrastructure**
   - Built **Flask application** for model serving and API endpoints
   - Containerized with **Docker** for reproducible deployments
   - Deployed on **Google Cloud Run** for auto-scaling and high availability
   - Real-time predictions with <200ms latency

### Full-Stack Dashboard

- **Frontend**: Interactive React-based dashboard with real-time data visualization
- **Backend**: Flask REST API integrating BigQuery, Cloud Storage, and ML models
- **Database**: BigQuery for data warehousing and analytics
- **Cloud Platform**: Google Cloud (Cloud Run, BigQuery, Cloud Storage, Vertex AI)

## Key Features

✅ **Real-time Forecasting**: Predict blood demand 1-7 days in advance  
✅ **Multi-Product Support**: Forecast across all blood groups (A+, A-, B+, B-, AB+, AB-, O+, O-)  
✅ **Surgical Integration**: Incorporate upcoming surgery schedules for demand spikes  
✅ **Inventory Optimization**: Automated alerts for reordering and waste prevention  
✅ **Clinician Dashboard**: User-friendly interface for 500+ healthcare professionals  
✅ **Cloud-Native**: Scalable, secure, and HIPAA-compliant infrastructure

## Impact & Results

| Metric | Result |
|--------|--------|
| **Annual Cost Savings** | $600,000+ |
| **Inventory Waste Reduction** | <1% (from 8-12%) |
| **Clinicians Served** | 500+ |
| **Prediction Accuracy** | 94% (1-day), 89% (7-day) |
| **Response Time** | <200ms for real-time predictions |
| **Deployment Uptime** | 99.9% on Google Cloud Run |

## Technical Stack

**Machine Learning**: Python, Scikit-learn, TensorFlow, Prophet, ARIMA, LSTM  
**Backend**: Flask, FastAPI, SQLAlchemy  
**Frontend**: React, D3.js, Plotly  
**Cloud Infrastructure**: Google Cloud Run, BigQuery, Cloud Storage, Vertex AI  
**DevOps**: Docker, Kubernetes, CI/CD with GitHub Actions  
**Data Pipeline**: Apache Airflow, BigQuery, Pandas

## Workflow Optimization

Beyond prediction accuracy, the system reduced **manual assessment time by >75%** through:
- Automated data aggregation from multiple hospital systems
- Smart alerts for low inventory and expiration warnings
- Integration with existing Electronic Health Record (EHR) systems
- Mobile-responsive dashboard for on-the-go decision making

## Collaboration

Worked closely with:
- **Pathologists** to understand blood usage patterns and clinical workflows
- **IT Infrastructure Teams** for secure cloud deployment
- **Hospital Administrators** for cost-benefit analysis and ROI tracking
- **Clinicians** for user experience testing and iterative improvements

## Future Enhancements

- Integration with national blood bank networks for regional supply optimization
- Predictive models for rare blood types and emergency scenarios
- Mobile app for push notifications and on-call decision support
- Expansion to other Mayo Clinic locations nationwide

---

**Status**: In Production (May 2025 - Present)  
**Organization**: Mayo Clinic, Rochester, MN  
**Role**: Data Science Intern - ML Engineer

