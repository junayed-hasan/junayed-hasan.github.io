---
layout: page
title: Bengali Clinical Machine Translation
description: Extrinsic evaluation of machine translation quality for low-resource Bengali clinical texts via downstream tasks
img: https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80
importance: 11
category: github
related_publications: false
github: https://github.com/junayed-hasan/BengaliClinicalMT
---

## Overview

Official repository for **"Extrinsic Evaluation of Machine Translation Quality via Downstream Tasks for Low-Resource Bengali Clinical Texts."** Includes datasets, preprocessing pipelines, translation models, evaluation code, and clinical outcome prediction tasks for assessing MT quality in healthcare NLP.

💻 **GitHub**: [BengaliClinicalMT](https://github.com/junayed-hasan/BengaliClinicalMT)  
📄 **Research**: Low-Resource Clinical MT Evaluation  
🌐 **Languages**: Bengali ↔ English

## Problem Statement

**Challenge**: Evaluating machine translation quality in low-resource clinical domains
- BLEU scores don't correlate with clinical utility
- Need extrinsic evaluation via downstream tasks
- Limited parallel Bengali-English clinical corpora

**Solution**: Evaluate MT through clinical outcome prediction performance

## Repository Contents

### 1. Datasets
- **Bengali Clinical Notes**: De-identified hospital discharge summaries
- **Parallel Corpus**: 5,000+ Bengali-English clinical sentence pairs
- **Downstream Task Data**: Mortality prediction, readmission risk

### 2. Preprocessing Pipelines
- Clinical text cleaning and normalization
- Named entity recognition (medications, conditions)
- Terminology preservation during translation

### 3. Translation Models
- **Statistical MT**: Moses phrase-based
- **Neural MT**: Transformer-based (fairseq, mBART)
- **Pre-trained**: mBERT, XLM-R fine-tuned for clinical domain
- **Commercial Baselines**: Google Translate, Microsoft Translator

### 4. Evaluation Metrics
**Intrinsic**:
- BLEU, METEOR, chrF
- BERTScore (semantic similarity)

**Extrinsic**:
- **Clinical Outcome Prediction**: Accuracy on mortality, readmission
- **Named Entity F1**: Preservation of medical entities
- **Human Evaluation**: Clinician ratings (fluency, adequacy)

### 5. Clinical Prediction Tasks
- **Mortality Prediction**: 30-day mortality from discharge notes
- **Readmission Risk**: 30-day hospital readmission
- **Diagnosis Coding**: ICD-10 code assignment

## Key Findings

### Translation Quality vs Clinical Utility

| MT System | BLEU ↑ | Mortality Acc ↑ | Readmission Acc ↑ |
|-----------|--------|-----------------|-------------------|
| **mBART Fine-tuned** | **28.4** | **82.3%** | **79.1%** |
| XLM-R Fine-tuned | 26.7 | 81.5% | 78.4% |
| Transformer (scratch) | 22.1 | 77.2% | 74.6% |
| Google Translate | 24.3 | 78.9% | 76.2% |
| Moses Phrase-based | 18.7 | 73.4% | 71.8% |

**Insight**: BLEU doesn't correlate perfectly with downstream task performance

### Medical Entity Preservation

| MT System | NER F1-Score |
|-----------|--------------|
| **mBART Fine-tuned** | **89.3%** |
| XLM-R Fine-tuned | 87.1% |
| Google Translate | 82.4% |
| Moses | 76.8% |

## Technical Implementation

### Preprocessing
```python
import re
from bnlp import NLTKTokenizer

def preprocess_bengali_clinical(text):
    # Normalize Unicode
    text = unicodedata.normalize('NFKC', text)
    
    # Remove PHI patterns
    text = re.sub(r'\d{2}/\d{2}/\d{4}', '[DATE]', text)
    text = re.sub(r'\d{10}', '[PHONE]', text)
    
    # Tokenize
    tokenizer = NLTKTokenizer()
    tokens = tokenizer.word_tokenize(text)
    
    return ' '.join(tokens)
```

### Translation Model (mBART)
```python
from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="bn_IN", tgt_lang="en_XX")

# Fine-tune on clinical parallel corpus
# ... training code ...

# Translate
inputs = tokenizer(bengali_text, return_tensors="pt")
outputs = model.generate(**inputs, forced_bos_token_id=tokenizer.lang_code_to_id["en_XX"])
translation = tokenizer.decode(outputs[0], skip_special_tokens=True)
```

### Clinical Outcome Prediction
```python
from transformers import BertForSequenceClassification

# Train on TRANSLATED clinical notes
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)
model.train_on_translated_notes(bengali_notes_translated_to_english)

# Evaluate prediction accuracy
accuracy = model.evaluate_mortality_prediction()
```

## Tech Stack

**MT Frameworks**: fairseq, Hugging Face Transformers, OpenNMT  
**NLP**: NLTK, spaCy, BNLP (Bengali NLP)  
**Clinical NLP**: SciSpacy, ClinicalBERT  
**ML**: PyTorch, Scikit-learn  
**Evaluation**: sacreBLEU, BERTScore

## Applications

### Healthcare in Low-Resource Languages
✅ Enable English-trained models to work on Bengali data  
✅ Cross-lingual clinical decision support  
✅ Multilingual electronic health records  
✅ Global health equity through language technology

## Related Work

- **TransMed**: Cross-lingual clinical prediction framework
- **CLKD-MED**: Cross-lingual knowledge distillation

## Citation

```bibtex
@inproceedings{hasan2024bengaliclinicalmt,
  title={Extrinsic Evaluation of Machine Translation Quality via Downstream Tasks for Low-Resource Bengali Clinical Texts},
  author={Hasan, Mohammad Junayed and others},
  booktitle={Under Preparation},
  year={2024}
}
```

---

**Status**: Research Repository  
**Languages**: Bengali, English  
**Domain**: Clinical NLP  
**License**: MIT
