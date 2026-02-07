![Test Status](https://github.com/Noorjanajrah/sauce_demo-swaglab-../actions/workflows/main.yml/badge.svg)

Sauce Demo: Comprehensive QA & Automation Project 
1. Project Overview
This project demonstrates an end-to-end Quality Assurance strategy for the Sauce Demo e-commerce application. It covers the full testing lifecycle, from strategic planning to automated execution using CI/CD pipelines.

2. Testing Strategy (Based on Test Plan)
The project follows a structured professional approach as defined in the Test Plan:


Objective: Ensure seamless purchase transactions and validate core business rules.


Scope: Includes user authentication, product inventory management, shopping cart operations, and the complete checkout workflow.


Testing Levels: System Testing, End-to-End Testing, and Performance Testing.


Methodology: Black-box testing using Equivalence Partitioning and Boundary Value Analysis.

3. Automation Framework & Tech Stack
To achieve continuous reliability, the following technical stack was implemented:

API Testing: Postman (Collections & Environments).

CLI Runner: Newman for headless test execution.

Version Control: Git with a professional branching strategy (main and dev-automation).

CI/CD: GitHub Actions utilized for automated test deployment.


Performance: Apache JMeter (planned for load and stress testing).

4. CI/CD Pipeline Configuration
A dedicated GitHub Runner (Ubuntu) is configured to execute tests automatically on every code push or merge. The workflow includes:

Environment Setup: Installing Node.js and Newman dependencies.

Automated Execution: Running the saucedemo.postman_collection.json against the specified environment.

Real-time Reporting: Providing instant feedback on test assertions directly in the GitHub Actions console.

5. Key Test Scenarios
The automated suite validates critical paths:


Authentication: Valid/Invalid logins and secure logout.


Inventory: Product sorting (Name/Price) and details view.


Cart Management: Adding/Removing items and state persistence.


Checkout: Validation of mandatory fields and order confirmation.

6. How to Run Locally
Clone the Repository:

Bash
git clone https://github.com/Noorjanajrah/sauce_demo-swaglab-..git
Install Newman:

Bash
npm install -g newman
Execute Suite:

Bash
newman run saucedemo.postman_collection.json -e DummyJSON.postman_environment.json

Prepared by: Noor Janajrah
Role: QA & Automation Engineer
