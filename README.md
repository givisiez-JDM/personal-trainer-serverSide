# 🏋️‍♂️ Personal Trainer – Server Side

A powerful backend API for managing personal trainer data: clients, training plans, exercise logs, and more – built with modern tools to power your fitness app.

## 🚀 Features

* **User & Client Management**
  Create, read, update, and delete clients, trainers, and user profiles.

* **Training Plans & Progress Tracking**
  Design training routines, track exercise sessions, and record progress over time.

* **Authentication & Authorization**
  Secure routes using JWT or similar token-based auth.

* **Validation & Error Handling**
  Input validation and structured error responses for robustness.

* **RESTful API**
  Clean endpoint design to integrate seamlessly with any frontend (web, mobile, etc.).

## 🧱 Tech Stack

* **Runtime / Framework**: e.g. Node.js + Express
* **Database**: MongoDB
* **ORM / Query Builder**: Mongoose
* **Authentication**: JSON Web Tokens (JWT)
* **Testing**: Jest
* **Linting / Formatting**: ESLint, Prettier
* **Environment Management**: dotenv

## 🔧 Getting Started

### Prerequisites

* Node.js v20+
* npm
* MongoDB

### Setup

1. **Clone this repo**

   ```bash
   git clone https://github.com/givisiez-JDM/personal-trainer-serverSide.git
   cd personal-trainer-serverSide
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

Server should now be running at `http://localhost:PORT`.

## 📦 API Documentation

### Example Endpoints

| Method | Path           | Description                       |
| ------ | -------------- | --------------------------------- |
| GET    | `/clients`     | List all clients                  |
| POST   | `/clients`     | Create a new client               |
| GET    | `/clients/:id` | Get a single client by ID         |
| PUT    | `/clients/:id` | Update client data                |
| DELETE | `/clients/:id` | Delete a client                   |
| POST   | `/auth/login`  | Authenticate and obtain JWT token |
| GET    | `/plans`       | Get training plans                |
| ...    | ...            | ...                               |

## 🧪 Testing

Run tests using:

```bash
npm test
```

This covers both unit tests and integration tests (API routes).

## 🛡️ Linting & Formatting

* **ESLint**: Enforces code quality

  ```bash
  npm run lint
  ```
* **Prettier**: Code formatting

  ```bash
  npm run format
  ```

## 🌍 Deployment

Example using Heroku:

```bash
git push heroku main
```

Make sure to set environment variables in your host.

## 📝 License

Specify the license you're using, e.g.:

Distributed under the MIT License. See `LICENSE` for details.
