---
layout: page
title: LLendify
description: AI-powered loan eligibility system using LLMs to analyze bank statements and provide instant recommendations
img: https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80
importance: 7
category: github
github: https://github.com/junayed-hasan/llendify
---

## Overview

**LLendify** leverages **large language models (LLMs)** to analyze bank statement PDFs and provide **instant loan eligibility insights**. Upload your bank statement and receive AI-powered loan recommendations, analysis of income patterns, spending habits, and creditworthiness in seconds.

💻 **GitHub**: [llendify](https://github.com/junayed-hasan/llendify)  
🚀 **Demo**: AI-Powered Financial Analysis  
🏆 **Innovation**: LLM-based document understanding for fintech

## Key Features

✅ **PDF Bank Statement Analysis**: Upload and parse complex bank PDFs  
✅ **LLM-Powered Insights**: GPT/Claude analyze financial patterns  
✅ **Loan Recommendation Engine**: Instant eligibility assessment  
✅ **Income Pattern Detection**: Identify regular income sources  
✅ **Spending Habit Analysis**: Categorize expenses automatically  
✅ **Creditworthiness Scoring**: ML-based risk assessment  
✅ **Privacy-First**: Local processing, no data storage

## How It Works

### 1. Document Upload
- User uploads bank statement PDF (last 3-6 months)
- Supported formats: PDF from major banks (Chase, BoA, Wells Fargo, etc.)

### 2. PDF Parsing & Extraction
- Extract text using PyPDF2 / pdfplumber
- Identify transactions, dates, amounts, descriptions
- Handle multi-column layouts and varied formats

### 3. LLM Analysis
- **Prompt Engineering**: Structured prompts for financial analysis
- **GPT-4 / Claude**: Analyze income stability, expense patterns
- **Chain-of-Thought**: Break down financial health assessment

### 4. Loan Recommendation
- Calculate **debt-to-income ratio**
- Assess **income stability** (regular vs. irregular)
- Identify **red flags** (overdrafts, bounced checks, late fees)
- Generate **loan eligibility score** (0-100)

### 5. Report Generation
- Comprehensive financial assessment
- Loan amount recommendations
- Interest rate estimates
- Approval probability

## Technical Architecture

```
Bank Statement PDF
         ↓
  PDF Text Extraction
         ↓
Transaction Parsing & Cleaning
         ↓
  LLM Analysis (GPT-4)
    ├── Income Detection
    ├── Expense Categorization
    ├── Pattern Recognition
    └── Risk Assessment
         ↓
ML Scoring Model (XGBoost)
         ↓
Loan Recommendation Report
```

## Sample Analysis Output

### Income Pattern Analysis
```
✅ Regular Income Detected
   - Monthly Salary: $5,200 (deposited on 1st of each month)
   - Freelance Income: $800-1,200/month (variable)
   - Total Average Monthly Income: $6,100

💡 Income Stability Score: 87/100 (Good)
```

### Spending Habits
```
📊 Expense Categories:
   - Housing: $1,500 (24.6%)
   - Transportation: $450 (7.4%)
   - Food & Dining: $650 (10.7%)
   - Utilities: $200 (3.3%)
   - Entertainment: $300 (4.9%)
   - Savings: $1,000 (16.4%)
   - Other: $2,000 (32.8%)

💰 Average Monthly Expenses: $6,100
💳 Debt-to-Income Ratio: 25% (Healthy)
```

### Loan Recommendation
```
🏦 Loan Eligibility: APPROVED ✅

Recommended Loan Amount: $25,000 - $40,000
Estimated Interest Rate: 6.5% - 8.5% APR
Approval Probability: 85%

Key Strengths:
✅ Stable monthly income
✅ Healthy debt-to-income ratio
✅ Consistent savings pattern
✅ No overdrafts or late fees

Areas for Improvement:
⚠️  Consider reducing discretionary spending by 10%
⚠️  Build 3-month emergency fund
```

## Technical Implementation

### PDF Parsing
```python
import pdfplumber
import re

def extract_transactions(pdf_path):
    transactions = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            # Regex patterns for date, amount, description
            pattern = r'(\d{2}/\d{2}/\d{4})\s+(.+?)\s+(-?\$[\d,]+\.\d{2})'
            matches = re.findall(pattern, text)
            transactions.extend(matches)
    return transactions
```

### LLM Analysis
```python
from openai import OpenAI

def analyze_financial_health(transactions):
    prompt = f"""
    You are a financial analyst. Analyze the following bank transactions and provide:
    1. Monthly income estimate
    2. Expense categorization
    3. Debt-to-income ratio
    4. Loan eligibility assessment
    
    Transactions:
    {transactions}
    
    Provide structured JSON output.
    """
    
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2
    )
    
    return json.loads(response.choices[0].message.content)
```

### Loan Scoring Model
```python
import xgboost as xgb

def calculate_loan_score(income, expenses, savings, debt_ratio, overdrafts):
    features = np.array([[income, expenses, savings, debt_ratio, overdrafts]])
    
    # Pre-trained XGBoost model
    model = xgb.Booster()
    model.load_model('loan_score_model.json')
    
    score = model.predict(xgb.DMatrix(features))[0]
    return min(max(score * 100, 0), 100)  # Scale to 0-100
```

## Tech Stack

**Backend**: Python, Flask / FastAPI  
**LLM Integration**: OpenAI GPT-4, Anthropic Claude  
**PDF Processing**: pdfplumber, PyPDF2, Camelot  
**ML Models**: XGBoost, Scikit-learn  
**Frontend**: React, Tailwind CSS  
**Deployment**: Docker, AWS Lambda (serverless)

## Use Cases

### Individual Users
- Check loan eligibility before applying
- Understand financial health
- Identify spending optimization opportunities

### Lenders & Banks
- Automated pre-approval screening
- Reduce manual document review time
- Improve loan approval accuracy

### Financial Advisors
- Client financial health assessment
- Personalized recommendations
- Portfolio analysis

## Privacy & Security

🔒 **Data Privacy**:
- No bank statements stored on servers
- Encrypted during processing
- Automatic deletion after analysis

🛡️ **Security Measures**:
- HTTPS-only communication
- SOC 2 compliance ready
- GDPR-compliant data handling

## Future Enhancements

- Multi-language support (Spanish, French, etc.)
- Integration with Plaid API for direct bank connection
- Credit score prediction using alternative data
- Mobile app (iOS/Android)
- Personalized financial tips and budgeting advice

---

**Status**: Active Development  
**Tech**: Python, LLMs, ML, React  
**License**: MIT

