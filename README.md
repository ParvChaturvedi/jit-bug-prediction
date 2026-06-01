# Just-In-Time Software Bug Prediction

> Predicting defect-inducing commits at commit time using Machine Learning techniques on the ApacheJIT dataset.

---

## Project Overview

Software defects introduced during development can significantly increase maintenance costs and reduce software reliability. Traditional defect prediction approaches operate at the file or module level, often detecting issues too late in the development cycle.

**Just-In-Time (JIT) Bug Prediction** addresses this challenge by predicting whether a commit is likely to introduce a defect immediately when the commit is made. Such predictions allow developers and reviewers to focus their attention on high-risk code changes before they reach production.

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
| Time Period          | 2003 – 2019                    |
| Source               | Zenodo Repository              |

Dataset Source:

https://zenodo.org/records/5907002

---

## Feature Set

The following commit-level metrics are used as predictive features.

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

* Removal of non-predictive identifiers
* Time-aware sorting using commit timestamps
* Chronological train-test split (80:20)
* Class imbalance handling using SMOTE
* Feature normalization using StandardScaler
* Prevention of data leakage by applying transformations only on training data

---

## Methodology

The project follows the workflow below:

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
Feature Scaling
          │
          ▼
Machine Learning Models
          │
          ▼
Model Evaluation
```

---

## Models

### Baseline Model

* Logistic Regression

### Planned Models

* Random Forest
* XGBoost

### Explainability

* Feature Importance Analysis
* SHAP (SHapley Additive Explanations)

---

## Logistic Regression Results

### Test Set Performance

| Metric    | Score  |
| --------- | ------ |
| Accuracy  | 69.24% |
| Precision | 30.46% |
| Recall    | 68.64% |
| F1 Score  | 42.19% |
| ROC-AUC   | 0.7612 |

### Class-wise Performance

| Class            | Precision | Recall | F1 Score |
| ---------------- | --------- | ------ | -------- |
| Clean Commit (0) | 0.919     | 0.694  | 0.790    |
| Buggy Commit (1) | 0.305     | 0.686  | 0.422    |

### Key Observations

* Successfully identifies approximately 69% of defect-inducing commits.
* Achieves strong discriminative capability with ROC-AUC of 0.761.
* Produces false positives due to the recall-oriented nature of the model.
* Establishes a baseline for comparison with ensemble learning approaches.

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
│   └── logistic_scaler.pkl
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

Install dependencies:

```bash
pip install -r requirements.txt
```

Run notebooks in the following order:

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

* Random Forest implementation
* Hyperparameter tuning
* XGBoost implementation
* SHAP explainability analysis
* Comparative model evaluation
* Web-based demonstration using Streamlit

---

## References

1. Kamei, Y. et al. (2013). A Large-Scale Empirical Study of Just-In-Time Quality Assurance. IEEE Transactions on Software Engineering.

2. Ni, C. et al. (2022). Just-In-Time Defect Prediction on JavaScript Projects: A Replication Study. MSR 2022.

3. ApacheJIT Dataset:
   https://zenodo.org/records/5907002

---

### Supervisor

Dr. Kumar Rajnish
Department of Computer Science & Engineering
Birla Institute of Technology, Mesra

---

*Research Project | Software Engineering | Machine Learning | Defect Prediction*
