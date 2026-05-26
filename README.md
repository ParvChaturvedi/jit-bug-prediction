# Just-In-Time Software Bug Prediction

> A machine learning system that predicts whether a code commit is likely to introduce a bug — at the moment it is made.

---

## Project Overview

**Just-In-Time (JIT) Defect Prediction** works at the commit level. Every time a developer pushes code, this system analyzes the commit's change metrics and flags it as bug-inducing or clean — enabling developers to review high-risk changes immediately.

This project is submitted as a **2-credit summer project** under the guidance of **Dr. Kumar Rajnish**, Department of Computer Science and Engineering.

| Detail | Info |
|---|---|
| **Student** | Parv Chaturvedi and Sakshar Daksh |
| **Roll No.** | BTECH/10408/23 and BTECH/10422/23 |
| **Year** | 3rd Year |
| **Guide** | Dr. Kumar Rajnish |
| **Department** | Computer Science & Engineering |
| **Credits** | 2 |

---

## Problem Statement

Software bugs introduced during development are expensive to fix if detected late. Traditional defect prediction works at the file or module level — too broad and too slow. Just-In-Time defect prediction addresses this by predicting bug-inducing commits the moment they are made, allowing immediate review of high-risk changes.

---

## Dataset

| Property | Details |
|---|---|
| **Name** | ApacheJIT |
| **Source** | [zenodo.org/records/5907002](https://zenodo.org/records/5907002) |
| **Total Commits** | 106,674 |
| **Bug-inducing** | 28,239 |
| **Clean** | 78,435 |
| **Projects** | 14 Apache open-source projects |
| **Period** | 2003 – 2019 |

---

## Features Used (14 Change Metrics)

| Dimension | Feature | Description |
|---|---|---|
| Diffusion | `NS` | Number of modified subsystems |
| Diffusion | `ND` | Number of modified directories |
| Diffusion | `NF` | Number of modified files |
| Diffusion | `Entropy` | Distribution of modified code across files |
| Size | `LA` | Lines of code added |
| Size | `LD` | Lines of code deleted |
| Size | `LT` | Lines of code in touched files |
| Purpose | `FIX` | Whether the commit is a bug fix |
| History | `NDEV` | Number of developers who changed the files |
| History | `AGE` | Average time interval between changes |
| History | `NUC` | Number of unique changes to the files |
| Experience | `EXP` | Developer experience (total commits) |
| Experience | `REXP` | Recent developer experience |
| Experience | `SEXP` | Developer experience on the subsystem |

**Target:** `buggy` — 1 (bug-inducing) or 0 (clean)

---

## Current Progress

### Phase 1 — EDA & Preprocessing ✅ Complete

- Loaded and explored ApacheJIT dataset
- Checked class distribution, feature correlations, missing values
- Applied time-aware train/test split (80/20, sorted by date)
- Applied SMOTE on training data only to handle class imbalance
- Applied StandardScaler for feature normalization

### Phase 2a — Logistic Regression (Baseline) ✅ Complete

Logistic Regression is used as the baseline model to establish a performance benchmark.

| Metric | Class 0 (Clean) | Class 1 (Bug) |
|---|---|---|
| Precision | 0.92 | 0.30 |
| Recall | 0.69 | 0.69 |
| F1-Score | 0.79 | 0.42 |
| AUC-ROC | — | 0.69 |

**Observation:** The model catches 69% of real bugs (recall) but flags many false positives (precision 0.30). This is expected for a linear baseline on imbalanced data and serves as the benchmark for upcoming models.

---

## Project Structure

```
jit-bug-prediction/
├── notebooks/
│   ├── 01_EDA.ipynb                ← Exploratory data analysis
│   ├── 02_Preprocessing.ipynb     ← Cleaning, SMOTE, split
│   └── 03_Model_Training.ipynb    ← Logistic Regression (baseline)
├── models/
│   └── logistic_regression.pkl    ← Saved LR model
├── plots/
│   └── roc_curve_lr.png           ← LR ROC curve
├── PROGRESS.md                    ← Phase-wise progress log
└── README.md
```

---

## Tech Stack

| Category | Tools |
|---|---|
| Language | Python 3.10 |
| Environment | Google Colab |
| ML | scikit-learn, imbalanced-learn |
| Visualization | matplotlib, seaborn |
| Version Control | GitHub |

---

## How to Run

### 1. Clone the repository
```bash
git clone https://github.com/your_username/jit-bug-prediction.git
cd jit-bug-prediction
```

### 2. Install dependencies
```bash
pip install pandas numpy scikit-learn imbalanced-learn matplotlib seaborn joblib
```

### 3. Download dataset
Download `apachejit_total.csv` from [zenodo.org/records/5907002](https://zenodo.org/records/5907002) and place it in the `data/` folder.

### 4. Run notebooks in order
```
01_EDA.ipynb → 02_Preprocessing.ipynb → 03_Model_Training.ipynb
```

---

## References

1. Kamei, Y., et al. (2013). *A Large-Scale Empirical Study of Just-in-Time Quality Assurance.* IEEE TSE.
2. Ni, C., et al. (2022). *Just-In-Time Defect Prediction on JavaScript Projects: A Replication Study.* MSR 2022.
3. ApacheJIT Dataset — [zenodo.org/records/5907002](https://zenodo.org/records/5907002)

---

> More phases coming soon — Random Forest, XGBoost, SHAP analysis and Streamlit demo.  

---

*Project guided by [Dr. Kumar Rajnish] · B.Tech CSE · [Birla Institute of Technology]*
