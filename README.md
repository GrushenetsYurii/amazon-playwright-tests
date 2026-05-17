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
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/GrushenetsYurii/amazon-playwright-tests.git
cd amazon-playwright-tests