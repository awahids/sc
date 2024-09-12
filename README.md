# Driver Salary API

This is a backend API for managing driver salaries in a logistics company. It is built using **Node.js**, **TypeScript**, **PostgreSQL**, and **TypeORM**.

## Table of Contents

- [Installation](#installation)
- [Database Setup](#database-setup)
- [Migrations](#migrations)
- [Manual SQL Migration](#manual-sql-migration)
- [Seeding](#seeding)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Example Response](#example-response)

## Installation

First, ensure that you have the following installed on your machine:

- **Node.js** (version >= 18.x.x)
- **PostgreSQL**
- **Yarn** (Package Manager)

### 1. Clone the repository:

```bash
git clone https://github.com/awahids/sc.git
cd sc
```

### 2. Install dependencies:

```bash
# Install project dependencies using Yarn
yarn install
```

### 3. Configure Environment Variables:

Copy `.env-example` and edit file name to `.env` in the root directory with the following content (modify values as per your setup):

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database
```

---

## Database Setup

### 1. Create Database

Log in to PostgreSQL and create a new database:

```bash
# Login to PostgreSQL
psql -U your_username

# Create a new database
CREATE DATABASE your_database_name;
```

Ensure the details in `.env` match the created database.

---

## Migrations

To set up your database tables, you need to run migrations.

### 1. Run Migrations

Use the following command to run all migrations:

```bash
# Run TypeORM migrations
yarn typeorm migration:run
```

---

## Manual SQL Migration

If running the migrations fails, you can manually create the necessary tables using the SQL script provided in `src/database/migrations/migration.sql`.

### 1. Apply SQL Script Manually

To apply the SQL migration manually, follow these steps:

1. Open your PostgreSQL client (such as `psql` or a GUI tool like `pgAdmin`).
2. Run the SQL script located in `src/database/migrations/migration.sql`:

```bash
# Run this command from within the PostgreSQL command-line tool:
\i path/to/your/project/src/database/migrations/migration.sql
```

This will create all the required tables in your database if the migration process fails.

---

## Seeding

After running migrations or manually applying the SQL script, you can seed the database with initial data.

### 1. Run Seeders

Use the following command to populate the database with initial seed data:

```bash
# Seed the database with initial data
yarn seed
```

This will insert data like driver information, attendance, shipments, and more from the `src/database/seeders` directory.

---

## Running the Application

To start the server locally, use the following command:

```bash
# Start the server in development mode
yarn start:dev
```

The server will run on `http://localhost:3000`.

---

## API Endpoints

### 1. Get Driver Salary List

- **Endpoint**: `/v1/salary/driver/list`
- **Method**: `GET`
- **Query Parameters**:
  - `current`: (optional) Current page number
  - `page_size`: (optional) Number of results per page
  - `month`: (required) Month (e.g., 2 for February)
  - `year`: (required) Year (e.g., 2024)
  - `name`: (optional) name of driver
  - `driver_code` (optional) code of driver

**Example Request:**

```
GET http://localhost:3000/v1/salary/driver/list?current=1&page_size=10&month=2&year=2024
```

---

## Example Response

```json
{
  "data": [
    {
      "driver_driver_code": "DRIVER034",
      "driver_name": "Driver Name 34",
      "total_pending": 403500000,
      "total_confirmed": 261000000,
      "total_paid": 295500000,
      "total_attendance_salary": 12750000,
      "count_shipment": 255,
      "total_salary": 972750000
    },
    {
      "driver_driver_code": "DRIVER033",
      "driver_name": "Driver Name 33",
      "total_pending": 489600000,
      "total_confirmed": 847200000,
      "total_paid": 369600000,
      "total_attendance_salary": 18000000,
      "count_shipment": 360,
      "total_salary": 1724400000
    }
    // more driver salary data...
  ],
  "total_row": 35,
  "current": 1,
  "page_size": 10
}
```

---

## License

This project is licensed under the [MIT License](LICENSE).
