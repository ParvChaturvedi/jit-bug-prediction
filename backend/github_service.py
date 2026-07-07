import requests
import os

# --------------------------------------------------
# GitHub Personal Access Token
# --------------------------------------------------
# For local testing only.
# Before publishing the project, replace this with:
# TOKEN = os.getenv("GITHUB_TOKEN")
# --------------------------------------------------

TOKEN = os.getenv("GITHUB_TOKEN")
HEADERS = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
}

if TOKEN:
    HEADERS["Authorization"] = f"Bearer {TOKEN}"


# --------------------------------------------------
# Helper function
# --------------------------------------------------

def github_get(url):
    response = requests.get(
        url,
        headers=HEADERS,
        timeout=15
    )

    if response.status_code == 404:
        raise Exception("Repository not found.")

    if response.status_code == 401:
        raise Exception("Invalid GitHub token.")

    if response.status_code == 403:
        data = response.json()

        message = data.get("message", "")

        if "rate limit" in message.lower():
            raise Exception("GitHub API rate limit exceeded.")

        raise Exception(message)

    response.raise_for_status()

    return response.json()


# --------------------------------------------------
# Parse Repository URL
# --------------------------------------------------

def parse_repo(repo_url):

    repo_url = repo_url.strip().rstrip("/")

    if not repo_url.startswith("https://github.com/"):
        raise Exception("Invalid GitHub repository URL.")

    parts = repo_url.split("/")

    if len(parts) < 5:
        raise Exception("Invalid GitHub repository URL.")

    owner = parts[-2]
    repo = parts[-1]

    return owner, repo


# --------------------------------------------------
# Latest Commit Metrics
# --------------------------------------------------

def get_latest_commit_metrics(repo_url):

    owner, repo = parse_repo(repo_url)

    commits_url = (
        f"https://api.github.com/repos/"
        f"{owner}/{repo}/commits"
    )

    commits = github_get(commits_url)

    if not isinstance(commits, list):
        raise Exception(
            f"Unexpected GitHub response: {commits}"
        )

    if len(commits) == 0:
        raise Exception(
            "Repository contains no commits."
        )

    latest_sha = commits[0]["sha"]

    commit_url = (
        f"https://api.github.com/repos/"
        f"{owner}/{repo}/commits/{latest_sha}"
    )

    commit = github_get(commit_url)

    stats = commit.get("stats", {})

    files = commit.get("files", [])

    return {
    "sha": latest_sha,
    "author": commit["commit"]["author"]["name"],
    "message": commit["commit"]["message"],
    "date": commit["commit"]["author"]["date"],
    "la": stats.get("additions", 0),
    "ld": stats.get("deletions", 0),
    "nf": len(files)
}


# --------------------------------------------------
# Repository Statistics
# --------------------------------------------------

def get_repository_stats(repo_url):

    owner, repo = parse_repo(repo_url)

    repo_url_api = (
        f"https://api.github.com/repos/"
        f"{owner}/{repo}"
    )

    data = github_get(repo_url_api)

    return {

        "name": data.get("name"),

        "owner": data.get("owner", {}).get("login"),

        "description": data.get("description"),

        "stars": data.get("stargazers_count", 0),

        "forks": data.get("forks_count", 0),

        "issues": data.get("open_issues_count", 0),

        "language": data.get("language", "Unknown"),

        "watchers": data.get("watchers_count", 0),

        "default_branch": data.get("default_branch"),

        "license": (
            data.get("license", {}) or {}
        ).get("name", "None"),

        "created_at": data.get("created_at"),

        "updated_at": data.get("updated_at")
    }
