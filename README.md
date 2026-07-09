# Just-In-Time Software Bug Prediction

> Predicting defect-inducing commits at commit time using Machine Learning techniques on the ApacheJIT dataset.

---

## Current Status

✅ Exploratory Data Analysis (EDA)

✅ Data Preprocessing

✅ Logistic Regression (Baseline Model)

✅ Random Forest Classifier

✅ XGBoost Implementation

✅ SHAP Explainability Analysis

✅ Web Application Deployment

**Project Status: Completed**

---

## Live Demo

| Component | Platform | Link |
| --------- | -------- | ---- |
| Frontend  | Vercel   | [jit-bug-prediction.vercel.app](https://jit-bug-prediction-git-main-parda.vercel.app) |
| Backend API | Render | [jit-bug-prediction-1.onrender.com](https://jit-bug-prediction-1.onrender.com) |

Paste any public GitHub repository URL into the app to get a real-time defect-risk prediction for its latest commit, powered by the XGBoost model.

---

## Project Overview

Software defects introduced during development significantly increase maintenance costs and reduce software reliability. Traditional defect prediction approaches operate at the file or module level and often identify defects too late in the software development lifecycle.

**Just-In-Time (JIT) Bug Prediction** addresses this challenge by predicting whether a commit is likely to introduce a defect immediately when the commit is made. This enables developers and reviewers to focus on high-risk code changes before they reach production.

This project was carried out as a **2-Credit Summer Research Project** under the supervision of **Dr. Kumar Rajnish**, Department of Computer Science & Engineering, Birla Institute of Technology, Mesra.

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

The objective of this project was to build machine learning models capable of identifying potentially buggy commits using commit-level software metrics, and to deploy the best-performing model as an interactive web application.

---

## Dataset

### ApacheJIT Dataset

The project utilizes the ApacheJIT dataset, a widely used benchmark dataset for Just-In-Time defect prediction research.

| Property             | Value                          |
| -------------------- | ------------------------------- |
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
| ------- | ------------------------------- |
| LA      | Lines Added                    |
| LD      | Lines Deleted                  |
| NF      | Number of Modified Files       |
| ND      | Number of Modified Directories |
| NS      | Number of Modified Subsystems  |
| ENT     | Entropy of Changes             |

### Historical Metrics

| Feature | Description                                 |
| ------- | -------------------------------------------- |
| NDEV    | Number of Developers Who Modified the Files |
| AGE     | Average Time Between Changes                |
| NUC     | Number of Unique Changes                    |

### Developer Experience Metrics

| Feature | Description                  |
| ------- | ----------------------------- |
| AEXP    | Overall Developer Experience |
| AREXP   | Recent Developer Experience  |
| ASEXP   | Subsystem Experience         |

### Target Variable

| Variable | Description                                |
| -------- | -------------------------------------------- |
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
Machine Learning Models (LR / RF / XGBoost)
          │
          ▼
Model Evaluation & Comparison
          │
          ▼
SHAP Explainability Analysis
          │
          ▼
Web Application Deployment
```

---

## Models Implemented

### 1. Logistic Regression (Baseline Model)

Logistic Regression was used as the baseline machine learning model.

| Metric    | Score  |
| --------- | ------ |
| Accuracy  | 69.24% |
| Precision | 30.46% |
| Recall    | 68.64% |
| F1 Score  | 42.19% |
| ROC-AUC   | 0.7612 |

**Observations:** Successfully identified approximately 69% of defect-inducing commits and established a strong baseline for comparison, though precision was low due to class imbalance.

---

### 2. Random Forest Classifier

| Metric    | Score  |
| --------- | ------ |
| Accuracy  | 68.18% |
| Precision | 31.57% |
| Recall    | 80.97% |
| F1 Score  | 45.43% |
| ROC-AUC   | 0.8084 |

**Observations:** Improved recall by more than 12 percentage points over Logistic Regression, along with better F1 Score and ROC-AUC, showing stronger capability in identifying defect-inducing commits.

---

### 3. XGBoost Classifier (Final Deployed Model)

XGBoost was trained as the final gradient-boosted model and selected as the production model for deployment.

| Metric    | Score  |
| --------- | ------ |
| Accuracy  | 72.16% |
| Precision | 33.95% |
| Recall    | 74.23% |
| F1 Score  | 46.59% |
| ROC-AUC   | 0.8031 |

**Observations:** Achieved the highest accuracy, precision, and F1 Score of all three models, while retaining strong recall — offering the best overall balance between correctly flagging risky commits and minimizing false alarms. This balance is why XGBoost was chosen as the model powering the live web application.

---

## Model Comparison

| Metric    | Logistic Regression | Random Forest | XGBoost |
| --------- | -------------------- | -------------- | ------- |
| Accuracy  | 69.24%               | 68.18%         | **72.16%** |
| Precision | 30.46%                | 31.57%         | **33.95%** |
| Recall    | 68.64%                | **80.97%**     | 74.23%  |
| F1 Score  | 42.19%                | 45.43%         | **46.59%** |
| ROC-AUC   | 0.7612                | **0.8084**     | 0.8031  |

### Key Findings

* Random Forest achieved the highest Recall and ROC-AUC, making it best suited when minimizing missed defects is the top priority.
* XGBoost achieved the highest Accuracy, Precision, and F1 Score, offering the best overall balance and was selected as the final deployed model.
* Both ensemble methods significantly outperformed the Logistic Regression baseline across all metrics.
* Ensemble learning methods proved more effective than linear models for JIT defect prediction.

---

## Explainability (SHAP Analysis)

SHAP (SHapley Additive exPlanations) was used to interpret XGBoost's predictions, both globally (across the dataset) and locally (per individual commit — as surfaced live in the deployed app).

### Global Feature Importance (Mean SHAP Value)

| Rank | Feature              | Mean SHAP Value |
| ---- | --------------------- | ---------------- |
| 1    | LA (Lines Added)      | 0.9872            |
| 2    | ENT (Entropy)         | 0.4948            |
| 3    | NF (Modified Files)   | 0.3697            |
| 4    | AGE                    | 0.2908            |
| 5    | ASEXP (Subsystem Exp.) | 0.2710           |

### Interpretation

The most influential factors associated with defect-inducing commits are:

* Large code additions (LA)
* Highly scattered code modifications (ENT)
* Changes affecting multiple files (NF)
* Older files (AGE)
* Lower subsystem experience of the developer (ASEXP)

These findings align with prior software engineering literature on defect prediction. SHAP summary, bar, waterfall, and dependence plots are available in `outputs/plots/`.

---

## Web Application

The final XGBoost model was deployed as a full-stack web application so users can analyze any public GitHub repository in real time.

### How It Works

1. User submits a public GitHub repository URL through the frontend.
2. The backend fetches the latest commit's metrics directly from the GitHub API.
3. Historical/experience-based features are approximated using dataset-wide averages.
4. The XGBoost model predicts the bug probability and risk level (LOW / MEDIUM / HIGH).
5. SHAP is used to compute the top contributing features for that specific prediction.
6. Results — prediction, risk level, commit details, and SHAP insights — are returned to the frontend and displayed to the user.

### Architecture

```text
┌─────────────────┐        POST /predict        ┌──────────────────────┐
│  Frontend (Vercel)│ ───────────────────────────▶│  Backend (Render)     │
│  React + Vite      │                             │  Flask API            │
│                     │◀───────────────────────────│  XGBoost + SHAP        │
└─────────────────┘        JSON response          └──────────────────────┘
                                                              │
                                                              ▼
                                                     GitHub REST API
                                                     (live commit metrics)
```

---

## Repository Structure

```text
jit-bug-prediction/
│
├── data/
│   ├── apachejit.csv
│   ├── processed.csv
│   └── processed_data.csv
│
├── notebooks/
│   ├── 01_EDA.ipynb
│   ├── 02_Preprocessing.ipynb
│   ├── 03_LR_Model_Training.ipynb
│   ├── 04_Random_Forest.ipynb
│   ├── 05_XGBoost.ipynb
│   ├── 06_Model_Comparison.ipynb
│   └── 07_SHAP_Analysis.ipynb
│
├── models/
│   ├── logistic_regression.pkl
│   ├── logistic_scaler.pkl
│   ├── random_forest.pkl
│   └── xgboost.pkl
│
├── outputs/
│   ├── plots/
│   └── tables/
│
├── backend/
│   ├── app.py
│   ├── github_service.py
│   ├── requirements.txt
│   ├── runtime.txt
│   └── Procfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   └── package.json
│
├── README.md
├── requirements.txt
└── .gitignore
```

---

## Technology Stack

| Category              | Tools                            |
| ---------------------- | --------------------------------- |
| Programming Language  | Python, JavaScript                |
| ML Development         | Google Colab                      |
| Data Processing        | Pandas, NumPy                     |
| Machine Learning       | Scikit-Learn, XGBoost, Imbalanced-Learn |
| Explainability          | SHAP                              |
| Visualization           | Matplotlib, Seaborn               |
| Model Persistence      | Joblib                            |
| Backend Framework      | Flask, Flask-CORS                 |
| Frontend Framework     | React, Vite, Tailwind CSS          |
| Backend Hosting        | Render                            |
| Frontend Hosting       | Vercel                            |
| External API            | GitHub REST API                   |
| Version Control         | Git & GitHub                      |

---

## Reproducibility

### Machine Learning Pipeline

```bash
pip install -r requirements.txt
```

Run notebooks in order:

```text
01_EDA.ipynb
↓
02_Preprocessing.ipynb
↓
03_LR_Model_Training.ipynb
↓
04_Random_Forest.ipynb
↓
05_XGBoost.ipynb
↓
06_Model_Comparison.ipynb
↓
07_SHAP_Analysis.ipynb
```

### Running the Web App Locally

**Backend:**

```bash
cd backend
pip install -r requirements.txt
python app.py
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

---

## Current Best Model

### XGBoost Classifier (Deployed in Production)

| Metric    | Score  |
| --------- | ------ |
| Accuracy  | 72.16% |
| Precision | 33.95% |
| F1 Score  | 46.59% |
| ROC-AUC   | 0.8031 |

XGBoost offered the strongest overall balance of accuracy, precision, and F1 Score among the evaluated models and was selected as the model powering the live prediction service.

---

## Future Work

* Incorporate additional commit-level and code-quality metrics
* Explore deep learning approaches (e.g., commit-message embeddings)
* Support batch analysis of multiple commits or full repository history
* Add user authentication and prediction history tracking
* Extend explainability visualizations directly within the web UI

---

## References

1. Kamei, Y., et al. (2013). *A Large-Scale Empirical Study of Just-In-Time Quality Assurance*. IEEE Transactions on Software Engineering.

2. Ni, C., et al. (2022). *Just-In-Time Defect Prediction on JavaScript Projects: A Replication Study*. MSR 2022.

3. Lundberg, S. M., & Lee, S.-I. (2017). *A Unified Approach to Interpreting Model Predictions*. NeurIPS.

4. ApacheJIT Dataset:

   https://zenodo.org/records/5907002

---

## Supervisor

**Dr. Kumar Rajnish**

Department of Computer Science & Engineering

Birla Institute of Technology, Mesra

---

*Research Project | Software Engineering | Machine Learning | Defect Prediction*
