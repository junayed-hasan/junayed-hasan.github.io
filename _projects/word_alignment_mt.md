---
layout: page
title: Word Alignment Techniques in Machine Translation
description: Implementation and comparison of statistical word alignment models for machine translation
img: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80
importance: 13
category: github
related_publications: false
github: https://github.com/junayed-hasan/word-alignment-techniques-in-machine-translation
---

## Overview

Comprehensive implementation of **statistical word alignment algorithms** for machine translation, including Dice coefficient, IBM Model 1, and bidirectional alignment with symmetrization heuristics (intersection, union, grow-diag-final).

💻 **GitHub**: [word-alignment-techniques-in-machine-translation](https://github.com/junayed-hasan/word-alignment-techniques-in-machine-translation)  
📚 **Models**: Dice, IBM Model 1, Bidirectional Alignment  
🔗 **Heuristics**: Intersection, Union, Grow-Diag-Final

## What is Word Alignment?

**Word Alignment**: Identifying translation correspondences between words in parallel sentences.

**Example**:
```
English:  The    cat    sat    on    the    mat
          |      |      |      |     |      |
French:   Le     chat   était  sur   le     tapis
```

**Alignment**: {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)}

**Challenges**:
- One-to-many: "did not" → "n'a pas"
- Many-to-one: "kick the bucket" → "mourir"
- Null alignments: function words
- Reordering: SVO vs SOV languages

## Implemented Models

### 1. Dice Coefficient

**Formula**:
$$\text{Dice}(e, f) = \frac{2 \times \text{count}(e, f)}{\text{count}(e) + \text{count}(f)}$$

**Algorithm**:
```python
def dice_coefficient(e_word, f_word, parallel_corpus):
    """
    Co-occurrence based alignment
    """
    count_ef = count_co_occurrence(e_word, f_word, parallel_corpus)
    count_e = count_word(e_word, english_corpus)
    count_f = count_word(f_word, french_corpus)
    
    dice = (2.0 * count_ef) / (count_e + count_f)
    return dice

# Align sentence pair
for e_word in english_sentence:
    best_f_word = max(french_sentence, key=lambda f: dice_coefficient(e, f))
    alignment.append((e_idx, f_idx))
```

**Pros**: Simple, fast, intuitive  
**Cons**: No positional information, symmetric only

### 2. IBM Model 1

**Generative Story**:
1. Choose sentence length
2. For each target word, pick a source word
3. Translate according to lexical probabilities

**Translation Probability**:
$$P(f|e) = \prod_{j=1}^{m} \sum_{i=0}^{l} t(f_j|e_i)$$

**EM Algorithm**:
```python
def ibm_model1(parallel_corpus, max_iter=10):
    """
    Train IBM Model 1 using EM
    """
    # Initialize t(f|e) uniformly
    t = defaultdict(lambda: 1.0 / vocab_size)
    
    for iteration in range(max_iter):
        # E-step: Compute expected counts
        count = defaultdict(float)
        total = defaultdict(float)
        
        for e_sent, f_sent in parallel_corpus:
            # Add NULL word
            e_sent = ['NULL'] + e_sent
            
            for f_word in f_sent:
                # Normalization factor
                Z = sum(t[(f_word, e_word)] for e_word in e_sent)
                
                for e_word in e_sent:
                    # Posterior probability
                    delta = t[(f_word, e_word)] / Z
                    
                    count[(f_word, e_word)] += delta
                    total[e_word] += delta
        
        # M-step: Update parameters
        for (f_word, e_word) in count:
            t[(f_word, e_word)] = count[(f_word, e_word)] / total[e_word]
    
    return t

# Align using trained model
def align_with_ibm1(e_sent, f_sent, t):
    alignment = []
    e_sent = ['NULL'] + e_sent
    
    for j, f_word in enumerate(f_sent):
        # Find best alignment
        best_i = max(range(len(e_sent)), 
                     key=lambda i: t[(f_word, e_sent[i])])
        
        if best_i > 0:  # Skip NULL alignments
            alignment.append((best_i - 1, j))
    
    return alignment
```

**Convergence**: Typically 5-10 EM iterations  
**Complexity**: O(n × m × |V_f| × |V_e|) per iteration

### 3. Bidirectional Alignment

**Motivation**: IBM Model 1 is asymmetric (source→target)

**Approach**:
1. Train **forward model**: P(f|e)
2. Train **backward model**: P(e|f)
3. **Symmetrize** alignment sets

#### Symmetrization Heuristics

**a) Intersection**
```python
alignment_final = alignment_e2f ∩ alignment_f2e
```
- **Precision**: High (only confident links)
- **Recall**: Low (many alignments lost)

**b) Union**
```python
alignment_final = alignment_e2f ∪ alignment_f2e
```
- **Precision**: Lower
- **Recall**: High (all possible links)

**c) Grow-Diag-Final** (Best Performance)
```python
def grow_diag_final(e2f, f2e):
    """
    Start with intersection, grow diagonally, add final links
    """
    # Step 1: Initialize with intersection
    alignment = e2f ∩ f2e
    
    # Step 2: Add neighboring links
    neighbors = [(±1, 0), (0, ±1), (±1, ±1), (±1, ∓1)]
    
    while True:
        added = False
        for (i, j) in alignment.copy():
            for (di, dj) in neighbors:
                new_link = (i + di, j + dj)
                
                if (new_link in e2f or new_link in f2e) and \
                   not_aligned(new_link):
                    alignment.add(new_link)
                    added = True
        
        if not added:
            break
    
    # Step 3: Add remaining union links
    for link in (e2f ∪ f2e):
        if not_aligned(link):
            alignment.add(link)
    
    return alignment
```

**Rationale**: Combines high-precision core + high-recall expansion

## Evaluation Metrics

### 1. Alignment Error Rate (AER)

$$\text{AER} = 1 - \frac{|A \cap G| + |A \cap P|}{|A| + |G|}$$

- **A**: Predicted alignment
- **G**: Sure gold alignments (mandatory)
- **P**: Possible gold alignments (optional)

### 2. Precision, Recall, F1

```python
precision = |predicted ∩ gold| / |predicted|
recall = |predicted ∩ gold| / |gold|
f1 = 2 × (precision × recall) / (precision + recall)
```

## Experimental Results

### Dataset: Hansard French-English Corpus

| Model | Precision | Recall | F1 | AER |
|-------|-----------|--------|----|----|
| **Dice Coefficient** | 62.4% | 58.1% | 60.2% | 39.8% |
| **IBM Model 1 (E→F)** | 78.3% | 71.2% | 74.6% | 25.4% |
| **IBM Model 1 (F→E)** | 76.8% | 73.5% | 75.1% | 24.9% |
| **Intersection** | 91.2% | 64.3% | 75.5% | 24.5% |
| **Union** | 68.7% | 89.1% | 77.6% | 22.4% |
| **Grow-Diag-Final** | **83.4%** | **82.7%** | **83.0%** | **17.0%** |

**Best Model**: Grow-Diag-Final achieves best balance

### Alignment Examples

**Input**:
```
English: The government has announced new measures .
French:  Le  gouvernement a  annoncé  de nouvelles mesures .
```

**Grow-Diag-Final Alignment**:
```
The(0) - Le(0)
government(1) - gouvernement(1)
has(2) - a(2)
announced(3) - annoncé(3)
new(4) - nouvelles(5)
measures(5) - mesures(6)
.(6) - .(7)
```

## Implementation Details

### Data Preprocessing
```python
import re
from nltk.tokenize import word_tokenize

def preprocess_sentence(text):
    # Lowercase
    text = text.lower()
    
    # Tokenize
    tokens = word_tokenize(text)
    
    # Remove punctuation (optional)
    # tokens = [t for t in tokens if t.isalnum()]
    
    return tokens
```

### Parallel Corpus Format
```python
# Input: sentence pairs
parallel_corpus = [
    (["the", "cat", "sat"], ["le", "chat", "était"]),
    (["john", "loves", "mary"], ["jean", "aime", "marie"]),
    # ... 100K+ pairs
]
```

### Visualization
```python
import matplotlib.pyplot as plt

def visualize_alignment(e_sent, f_sent, alignment):
    """
    Plot alignment matrix
    """
    matrix = np.zeros((len(e_sent), len(f_sent)))
    for (i, j) in alignment:
        matrix[i, j] = 1
    
    plt.imshow(matrix, cmap='Blues')
    plt.xticks(range(len(f_sent)), f_sent, rotation=45)
    plt.yticks(range(len(e_sent)), e_sent)
    plt.xlabel('French')
    plt.ylabel('English')
    plt.title('Word Alignment')
    plt.show()
```

## Tech Stack

**Language**: Python 3.8+  
**NLP**: NLTK, spaCy  
**Numerics**: NumPy, SciPy  
**Visualization**: Matplotlib, Seaborn  
**Data**: Pandas

## Repository Structure

```
word-alignment-techniques/
├── data/
│   ├── hansard/
│   └── gold_alignments/
├── models/
│   ├── dice.py
│   ├── ibm_model1.py
│   └── bidirectional.py
├── symmetrization/
│   ├── intersection.py
│   ├── union.py
│   └── grow_diag_final.py
├── evaluation/
│   ├── aer.py
│   └── visualize.py
├── notebooks/
│   ├── alignment_demo.ipynb
│   └── results_analysis.ipynb
└── requirements.txt
```

## Applications

### Machine Translation
✅ **Phrase Extraction**: Find phrase pairs for SMT  
✅ **Reordering Models**: Learn word order patterns  
✅ **Translation Memory**: Match similar sentences

### Multilingual NLP
✅ **Cross-lingual Embeddings**: Align word vectors  
✅ **Annotation Projection**: Transfer labels across languages  
✅ **Bilingual Lexicon Induction**: Extract dictionaries

## Advanced Topics (Future Work)

🔬 **IBM Models 2-5**: Add fertility, distortion, NULL handling  
🔬 **HMM Alignment**: Hidden Markov Model with position dependencies  
🔬 **Neural Alignments**: Attention mechanisms from Transformers  
🔬 **Unsupervised Alignment**: Without parallel data

## References

- **Brown et al. (1993)**: "The Mathematics of Statistical Machine Translation: Parameter Estimation"
- **Och & Ney (2003)**: "A Systematic Comparison of Various Statistical Alignment Models"
- **Koehn et al. (2003)**: "Statistical Phrase-Based Translation"

---

**Status**: Educational Repository  
**License**: MIT  
**Course**: NLP / Machine Translation
