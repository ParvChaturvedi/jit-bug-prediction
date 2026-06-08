# Just-In-Time Software Bug Prediction

> Predicting defect-inducing commits at commit time using Machine Learning techniques on the ApacheJIT dataset.

---

## Current Status

✅ Exploratory Data Analysis (EDA)

✅ Data Preprocessing

✅ Logistic Regression (Baseline Model)

✅ Random Forest Classifier

⏳ XGBoost Implementation

⏳ SHAP Explainability Analysis

⏳ Streamlit Deployment

---

## Project Overview

Software defects introduced during development significantly increase maintenance costs and reduce software reliability. Traditional defect prediction approaches operate at the file or module level and often identify defects too late in the software development lifecycle.

**Just-In-Time (JIT) Bug Prediction** addresses this challenge by predicting whether a commit is likely to introduce a defect immediately when the commit is made. This enables developers and reviewers to focus on high-risk code changes before they reach production.

This project is being carried out as a **2-Credit Summer Research Project** under the supervision of **Dr. Kumar Rajnish**, Department of Computer Science & Engineering, Birla Institute of Technology, Mesra.

---

## Project Information

| Field         | Details                              |
| ------------- | ------------------------------------ |
| Project Title | Just-In-Time Software Bug Prediction |
| Student 1     | Parv Chaturvedi (BTECH/10408/23)     |
| Student 2     | Sakshar Daksh (BTECH/10422/23)       |
| Department    | Computer Science & Engineering       |
| Institute     | Birla Institute of Technology, Mesra |
| Supervisor    | Dr. Kumar Rajnish                    |
| Project Type  | Summer Research Project              |
| Credits       | 2                                    |

---

## Problem Statement

Software bugs are among the primary causes of software failures and maintenance overhead. Detecting defect-inducing commits at an early stage enables:

* Improved software quality
* Reduced debugging effort
* Faster code review processes
* Lower maintenance costs
* More reliable software releases

The objective of this project is to build machine learning models capable of identifying potentially buggy commits using commit-level software metrics.

---

## Dataset

### ApacheJIT Dataset

The project utilizes the ApacheJIT dataset, a widely used benchmark dataset for Just-In-Time defect prediction research.

| Property             | Value                          |
| -------------------- | ------------------------------ |
| Dataset Name         | ApacheJIT                      |
| Total Commits        | 106,674                        |
| Bug-Inducing Commits | 28,239                         |
| Clean Commits        | 78,435                         |
| Projects             | 14 Apache Open Source Projects |
| Time Period          | 2003–2019                      |
| Source               | Zenodo Repository              |

Dataset Source:

https://zenodo.org/records/5907002

---

## Feature Set

### Code Change Metrics

| Feature | Description                    |
| ------- | ------------------------------ |
| LA      | Lines Added                    |
| LD      | Lines Deleted                  |
| NF      | Number of Modified Files       |
| ND      | Number of Modified Directories |
| NS      | Number of Modified Subsystems  |
| ENT     | Entropy of Changes             |

### Historical Metrics

| Feature | Description                                 |
| ------- | ------------------------------------------- |
| NDEV    | Number of Developers Who Modified the Files |
| AGE     | Average Time Between Changes                |
| NUC     | Number of Unique Changes                    |

### Developer Experience Metrics

| Feature | Description                  |
| ------- | ---------------------------- |
| AEXP    | Overall Developer Experience |
| AREXP   | Recent Developer Experience  |
| ASEXP   | Subsystem Experience         |

### Target Variable

| Variable | Description                               |
| -------- | ----------------------------------------- |
| BUGGY    | 1 = Bug-Inducing Commit, 0 = Clean Commit |

---

## Data Preprocessing

The preprocessing pipeline includes:

* Removal of non-predictive identifier columns
* Feature selection for software metrics
* Time-aware chronological sorting
* Chronological train-test split (80:20)
* Class imbalance handling using SMOTE
* Feature normalization using StandardScaler (for Logistic Regression)
* Prevention of data leakage by applying transformations only on training data

---

## Methodology

```text
Raw ApacheJIT Dataset
          │
          ▼
Exploratory Data Analysis
          │
          ▼
Data Preprocessing
          │
          ▼
Time-Aware Train/Test Split
          │
          ▼
SMOTE Oversampling
          │
          ▼
Feature Scaling (LR)
          │
          ▼
Machine Learning Models
          │
          ▼
Model Evaluation
```

---

## Models Implemented

### 1. Logistic Regression (Baseline Model)

Logistic Regression was used as the baseline machine learning model.

#### Performance

| Metric    | Score  |
| --------- | ------ |
| Accuracy  | 69.24% |
| Precision | 30.46% |
| Recall    | 68.64% |
| F1 Score  | 42.19% |
| ROC-AUC   | 0.7612 |

#### Observations

* Successfully identified approximately 69% of defect-inducing commits.
* Established a strong baseline for comparison.
* Demonstrated good recall but relatively low precision due to class imbalance.

---

### 2. Random Forest Classifier

Random Forest was trained using the same software metrics and evaluation methodology.

#### Performance

| Metric    | Score  |
| --------- | ------ |
| Accuracy  | 68.18% |
| Precision | 31.57% |
| Recall    | 80.97% |
| F1 Score  | 45.43% |
| ROC-AUC   | 0.8084 |

#### Observations

* Improved Recall by more than 12 percentage points.
* Improved F1 Score and ROC-AUC compared to Logistic Regression.
* Demonstrated stronger capability in identifying defect-inducing commits.
* Showed stable generalization with training accuracy of 78.39%.

---

## Model Comparison

| Metric    | Logistic Regression | Random Forest |
| --------- | ------------------- | ------------- |
| Accuracy  | 69.24%              | 68.18%        |
| Precision | 30.46%              | 31.57%        |
| Recall    | 68.64%              | 80.97%        |
| F1 Score  | 42.19%              | 45.43%        |
| ROC-AUC   | 0.7612              | 0.8084        |

### Key Findings

* Random Forest outperformed Logistic Regression on Recall, F1 Score, and ROC-AUC.
* Recall improved from 68.64% to 80.97%.
* ROC-AUC improved from 0.7612 to 0.8084.
* Ensemble learning methods appear more effective than linear models for JIT defect prediction.

---

## Feature Importance Analysis (Random Forest)

| Rank | Feature                       | Importance |
| ---- | ----------------------------- | ---------- |
| 1    | LA (Lines Added)              | 0.3019     |
| 2    | ENT (Entropy)                 | 0.1591     |
| 3    | NF (Number of Modified Files) | 0.1199     |
| 4    | AGE                           | 0.1044     |
| 5    | LD (Lines Deleted)            | 0.0827     |

### Interpretation

The most influential factors associated with defect-inducing commits are:

* Large code additions (LA)
* Highly scattered code modifications (ENT)
* Changes affecting multiple files (NF)
* Older files (AGE)
* Large code deletions (LD)

These findings align with prior software engineering literature on defect prediction.

---

## Repository Structure

```text
jit-bug-prediction/
│
├── data/
│   ├── apachejit.csv
│   └── processed_data.csv
│
├── notebooks/
│   ├── 01_EDA.ipynb
│   ├── 02_Preprocessing.ipynb
│   ├── 03_Logistic_Regression.ipynb
│   ├── 04_Random_Forest.ipynb
│   └── 05_XGBoost.ipynb
│
├── models/
│   ├── logistic_regression.pkl
│   ├── logistic_scaler.pkl
│   └── random_forest.pkl
│
├── outputs/
│   ├── plots/
│   ├── tables/
│   └── reports/
│
├── README.md
├── requirements.txt
└── .gitignore
```

---

## Technology Stack

| Category             | Tools                          |
| -------------------- | ------------------------------ |
| Programming Language | Python                         |
| Environment          | Google Colab                   |
| Data Processing      | Pandas, NumPy                  |
| Machine Learning     | Scikit-Learn, Imbalanced-Learn |
| Visualization        | Matplotlib, Seaborn            |
| Model Persistence    | Joblib                         |
| Version Control      | Git & GitHub                   |

---

## Reproducibility

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Notebooks

```text
01_EDA.ipynb
↓
02_Preprocessing.ipynb
↓
03_Logistic_Regression.ipynb
↓
04_Random_Forest.ipynb
↓
05_XGBoost.ipynb
```

---

## Future Work

### Phase 5: XGBoost

* Gradient Boosted Trees
* Hyperparameter Optimization
* Performance Comparison

### Phase 6: Explainability

* SHAP Analysis
* Global Feature Importance
* Local Prediction Explanations

### Phase 7: Deployment

* Streamlit Web Application
* Real-Time Commit Risk Prediction
* Interactive Dashboard

---

## Current Best Model

### Random Forest Classifier

| Metric   | Score  |
| -------- | ------ |
| Recall   | 80.97% |
| F1 Score | 45.43% |
| ROC-AUC  | 0.8084 |

As of the current stage of development, Random Forest provides the strongest predictive performance among the evaluated models.

---

## References

1. Kamei, Y., et al. (2013). *A Large-Scale Empirical Study of Just-In-Time Quality Assurance*. IEEE Transactions on Software Engineering.

2. Ni, C., et al. (2022). *Just-In-Time Defect Prediction on JavaScript Projects: A Replication Study*. MSR 2022.

3. ApacheJIT Dataset:

   https://zenodo.org/records/5907002

---

## Supervisor

**Dr. Kumar Rajnish**

Department of Computer Science & Engineering

Birla Institute of Technology, Mesra

---

*Research Project | Software Engineering | Machine Learning | Defect Prediction*
