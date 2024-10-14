# Full-Stack Application with Laravel API and Next.js Frontend

## Overview

This project consists of two parts:
1. A **Laravel** basic small application that serves as the backend, providing API endpoints (not yet secured with authentication).
2. A **Next.js** application that serves as the frontend, which communicates with the Laravel API.

---

## Laravel Application (Backend)

### Description
This is a very basic Laravel application that provides an API endpoint (not yet secured with authentication).

### Installation
1. Clone the repository and navigate to the Laravel app directory:
   ```bash
   cd ./Backend
   ```
2. Install the dependencies using Composer:
   ```bash
   composer install
   ``
4. Generate the application key:
   ```bash
   php artisan key:generate
   ```
5. Set up your database in the `.env` file and run migrations:
   ```bash
   php artisan migrate
   ```

6. Inject a couple of users and project into the db:
   ```bash
   php artisan db:seed
   ```

### Running the Application
You can run the Laravel development server with:
```bash
php artisan serve
```

By default, the app will be served at `http://localhost:8000`.


## Next.js Application (Frontend)

### Description
This is a Next.js application that serves as the frontend of the project. It communicates with the Laravel API.

### Requirements
- Node.js 18.x or higher
- npm (Node Package Manager)

### Installation
1. Clone the repository and navigate to the Next.js app directory:
   ```bash
   cd ./Frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
You can run the development server with:
```bash
next serve
```

By default, the app will be served at `http://localhost:3000`.

---

## Future Improvements
- Implement authentication for the Laravel API endpoints.
- Adding more fun stuff :) 