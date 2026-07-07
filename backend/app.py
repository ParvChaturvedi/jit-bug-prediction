from flask import Flask, request, jsonify
from flask_cors import CORS

import pandas as pd
import joblib
import shap

from pathlib import Path

from github_service import (
    get_latest_commit_metrics,
    get_repository_stats
)

app = Flask(__name__)

CORS(
    app,
    origins=[
        "https://jit-bug-prediction.vercel.app"
    ]
)

# ----------------------------------------------------
# Paths
# ----------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR.parent / "models" / "xgboost.pkl"
DATA_PATH = BASE_DIR.parent / "data" / "processed_data.csv"

# ----------------------------------------------------
# Load Model
# ----------------------------------------------------

model = joblib.load(MODEL_PATH)

# SHAP Explainer
explainer = shap.TreeExplainer(model)

# ----------------------------------------------------
# Load Dataset
# ----------------------------------------------------

df = pd.read_csv(DATA_PATH)

FEATURE_COLUMNS = [
    "la",
    "ld",
    "nf",
    "nd",
    "ns",
    "ent",
    "ndev",
    "age",
    "nuc",
    "aexp",
    "arexp",
    "asexp"
]

feature_means = (
    df[FEATURE_COLUMNS]
    .mean()
    .to_dict()
)

# ----------------------------------------------------
# Home Route
# ----------------------------------------------------

@app.route("/")
def home():
    return jsonify({
        "message": "JIT Bug Prediction API Running"
    })


# ----------------------------------------------------
# Prediction Route
# ----------------------------------------------------

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "error": "Invalid request body."
            }), 400

        repo_url = data.get("repo_url", "").strip()

        if not repo_url:
            return jsonify({
                "success": False,
                "error": "Please enter a GitHub repository URL."
            }), 400

        # ------------------------------------------------
        # GitHub Data
        # ------------------------------------------------

        metrics = get_latest_commit_metrics(repo_url)

        repo_stats = get_repository_stats(repo_url)

        # ------------------------------------------------
        # Feature Vector
        # ------------------------------------------------

        features = [[
            metrics["la"],
            metrics["ld"],
            metrics["nf"],
            feature_means["nd"],
            feature_means["ns"],
            feature_means["ent"],
            feature_means["ndev"],
            feature_means["age"],
            feature_means["nuc"],
            feature_means["aexp"],
            feature_means["arexp"],
            feature_means["asexp"]
        ]]

        # ------------------------------------------------
        # Prediction
        # ------------------------------------------------

        prediction = int(
            model.predict(features)[0]
        )

        probability = float(
            model.predict_proba(features)[0][1]
        )

        # ------------------------------------------------
        # SHAP
        # ------------------------------------------------

        feature_df = pd.DataFrame(
            features,
            columns=FEATURE_COLUMNS
        )

        shap_values = explainer.shap_values(feature_df)

        if isinstance(shap_values, list):
            shap_values = shap_values[0]

        shap_dict = {}

        for i, feature in enumerate(FEATURE_COLUMNS):
            shap_dict[feature] = float(
                shap_values[0][i]
            )

        top_features = sorted(
            shap_dict.items(),
            key=lambda x: abs(x[1]),
            reverse=True
        )[:5]

        # ------------------------------------------------
        # Risk Level
        # ------------------------------------------------

        if probability >= 0.7:
            risk = "HIGH"

        elif probability >= 0.4:
            risk = "MEDIUM"

        else:
            risk = "LOW"

        # ------------------------------------------------
        # Response
        # ------------------------------------------------

        return jsonify({

            "success": True,

            "repository": repo_url,

            "prediction": prediction,

            "bug_probability": round(
                probability * 100,
                2
            ),

            "confidence": round(
                probability * 100,
                2
            ),

            "risk": risk,

            "latest_commit": {

                "sha": metrics.get("sha"),

                "author": metrics.get("author"),

                "message": metrics.get("message"),

                "date": metrics.get("date")

            },

            "metrics": {

                "la": metrics.get("la"),

                "ld": metrics.get("ld"),

                "nf": metrics.get("nf")

            },

            "repository_stats": repo_stats,

            "shap_insights": [

                {
                    "feature": feature,
                    "impact": round(value, 4)
                }

                for feature, value in top_features

            ]

        })

    except Exception as e:

        import traceback

        print("\n========== ERROR ==========")
        traceback.print_exc()
        print("===========================\n")

        return jsonify({

            "success": False,

            "error": str(e)

        }), 500


# ----------------------------------------------------
# Run Server
# ----------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)
