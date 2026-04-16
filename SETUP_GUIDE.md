# Setup Guide for Beauty SaaS Project

This guide provides step-by-step instructions to set up the Beauty SaaS project.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installing Dependencies](#installing-dependencies)
3. [Setting Up PostgreSQL](#setting-up-postgresql)
4. [Configuring Environment Variables](#configuring-environment-variables)
5. [Running the Server](#running-the-server)

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (version X.X.X)
- npm (version X.X.X)
- PostgreSQL (version X.X.X)

## Installing Dependencies
1. Clone the repository:
   ```bash
   git clone https://github.com/wendelrock/beauty-saas.git
   cd beauty-saas
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

## Setting Up PostgreSQL
1. Install PostgreSQL by following the instructions for your operating system:
   - For Windows, download from [PostgreSQL Download](https://www.postgresql.org/download/windows/)
   - For macOS, use Homebrew:
     ```bash
     brew install postgresql
     ```
   - For Ubuntu:
     ```bash
     sudo apt-get update
     sudo apt-get install postgresql postgresql-contrib
     ```
2. Start the PostgreSQL service:
   ```bash
   # Windows
   pg_ctl -D "path-to-your-data-directory" start
   
   # macOS
   brew services start postgresql
   
   # Ubuntu
   sudo service postgresql start
   ```
3. Create a database for the project:
   ```bash
   psql -U postgres
   CREATE DATABASE beauty_saas;
   ``
4. Set up the database schema by running the migration script:
   ```bash
   npm run migrate
   ```

## Configuring Environment Variables
1. Create a `.env` file in the root directory of the project:
   ```bash
   touch .env
   ```
2. Add the following environment variables to the `.env` file:
   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/beauty_saas
   PORT=5000
   NODE_ENV=development
   ```
   Adjust the values accordingly.

## Running the Server
1. Start the server:
   ```bash
   npm start
   ```
2. Your server should now be running at `http://localhost:5000`.

## Conclusion
You have successfully set up the Beauty SaaS project. If you run into any issues, refer to the project documentation or reach out to the support community.