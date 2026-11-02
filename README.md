# Inventory Management System – Backend

## Project Overview

The Inventory Management System is a backend-only REST API developed using Node.js and Express.js.

It manages inventory items using JavaScript arrays stored in runtime memory. No database or file-based storage is used.

## Technologies Used

* Node.js
* Express.js
* JavaScript
* dotenv
* CORS
* Nodemon
* Thunder Client

## Features

* Add inventory items
* Get all inventory items
* Get a single item by ID
* Update inventory items
* Delete inventory items
* Filter items by category
* Search items by name
* Filter by minimum and maximum quantity
* Request validation middleware
* Centralized error handling
* Consistent JSON responses

## Project Structure

```text
inventory-backend/
├── controllers/
├── routes/
├── middleware/
├── model/
├── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd inventory-backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
```

Start the development server:

```bash
npm run dev
```

## Base URL

```text
http://localhost:5000
```

## API Endpoints

| Method | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| GET    | /                  | API status     |
| POST   | /api/inventory     | Add item       |
| GET    | /api/inventory     | Get all items  |
| GET    | /api/inventory/:id | Get item by ID |
| PUT    | /api/inventory/:id | Update item    |
| DELETE | /api/inventory/:id | Delete item    |

## Query Parameters

Filter by category:

```text
/api/inventory?category=Electronics
```

Search by item name:

```text
/api/inventory?search=laptop
```

Filter by minimum quantity:

```text
/api/inventory?minQuantity=5
```

Filter by maximum quantity:

```text
/api/inventory?maxQuantity=20
```

Combine filters:

```text
/api/inventory?category=Electronics&minQuantity=5
```

## Sample Request Body

```json
{
  "name": "Laptop",
  "category": "Electronics",
  "quantity": 10,
  "price": 45000
}
```

## Storage

Inventory data is stored in a JavaScript array in runtime memory.

The data resets when the server restarts. No database is connected.

## Error Handling

The application uses validation middleware and centralized error handling to return consistent JSON error responses.

## Author

Nihal MV
