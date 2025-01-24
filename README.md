
# NestJS Prisma API

This project is a RESTful API built with [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient and scalable server-side applications. The API uses [Prisma](https://www.prisma.io/) as the ORM for database interactions.

## Features

- User and Employee management
- Rate limiting using NestJS Throttler
- Custom exception handling
- Logging to files
- Validation using class-validator and class-transformer
- Prisma ORM for database interactions


## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd <repository_name>
```

2. Install dependencies:

```bash
npm install
```

3. Set up the database:

- Create a `.env` file in the root directory and add your database connection string:

```env
DATABASE_URL="your-database-connection-string"
```

- Initialize Prisma:

```bash
npx prisma init
npx prisma migrate dev --name init
```

## Running the App

1. Start the development server:

```bash
npm run start:dev
```

2. Start the production server:

```bash
npm run start:prod
```

## Testing

1. Run unit tests:

```bash
npm run test
```

2. Run end-to-end tests:

```bash
npm run test:e2e
```

3. Check test coverage:

```bash
npm run test:cov
```

## API Endpoints

### Users

- `GET /users` - Get all users
- `GET /users/:id` - Get a user by ID
- `POST /users` - Create a new user
- `PATCH /users/:id` - Update a user by ID
- `DELETE /users/:id` - Delete a user by ID

### Employees

- `GET /employees` - Get all employees
- `GET /employees/:id` - Get an employee by ID
- `POST /employees` - Create a new employee
- `PATCH /employees/:id` - Update an employee by ID
- `DELETE /employees/:id` - Delete an employee by ID

## License

This project is MIT licensed.
