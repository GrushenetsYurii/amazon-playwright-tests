# Amazon Playwright E2E Automation Project

This repository contains automated End-to-End (E2E) tests for Amazon.com built with **Playwright** and **TypeScript**, implementing the **Page Object Model (POM)** design pattern.

## Project Description

The target of this project is to automate and validate core user flows on Amazon. Currently, the test suite includes:
* Navigating to Amazon.com.
* Handling regional location popups and automated bot-check challenge screens (`Continue shopping`).
* Searching for specific digital products (e.g., `WWE 2K26 Digital Code`).
* Opening product detail pages and adding items to the shopping cart.
* Verifying successful addition to the cart.

---

## Tech Stack & Dependencies

* **Language:** TypeScript
* **Framework:** Playwright (Web-first assertions, multi-browser support)
* **Runner:** Node.js
* **CI/CD:** GitHub Actions

The main dependencies managed in `package.json` include `@playwright/test`, `typescript`, and standard code quality/formatting tools if applicable.

---

## Local Setup & Execution

### Prerequisites
Ensure you have Node.js installed (v18 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/GrushenetsYurii/amazon-playwright-tests.git
cd amazon-playwright-tests
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

### 4. Run tests locally
* **Run all tests in headless mode:**
  ```bash
  npx playwright test
  ```
* **Run tests with UI mode (interactive debugging):**
  ```bash
  npx playwright test --ui
  ```
* **View the latest test report:**
  ```bash
  npx playwright show-report
  ```

---

## Continuous Integration (CI) & Branch Rules

### GitHub Actions
Tests are automatically triggered on every push and pull_request to the main branch. After execution, HTML execution reports, screenshots, and test videos are captured and uploaded as workflow Artifacts for easy debugging of failures occurring in headless cloud environments.

### Branch Protection Rules
To maintain code quality and stability in the main branch, the following strict rules apply:
1. **No Direct Pushes:** Code changes must be introduced via Pull Requests (PRs).
2. **Required Status Checks:** The GitHub Actions workflow must pass successfully before a PR can be merged.
3. **Code Review:** Approvals from designated code owners are required before merging.

---

## Dependabot Integration

We use GitHub's Dependabot to keep dependencies secure and up to date automatically. 

* **Configuration:** Dependabot monitors the npm ecosystem by checking the `package.json` file.
* **Schedule:** It runs on a weekly schedule.
* **Behavior:** If an outdated package or security vulnerability is detected, Dependabot automatically opens a Pull Request with the required version bump. These PRs must also pass the automated CI test suite before merging.