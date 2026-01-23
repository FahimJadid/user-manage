# Backend API

Express + TypeScript + Prisma + MongoDB backend for User Management.

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Generate Prisma client:
```bash
pnpm db:generate
```

4. Push schema to database:
```bash
pnpm db:push
```

5. Seed database:
```bash
pnpm db:seed
```

6. Start development server:
```bash
pnpm dev
```

## API Endpoints

- `GET /users` - Get all users (with search & role filter)
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id/toggle-active` - Toggle user active status

## API Documentation

OpenAPI spec available at: `http://localhost:3002/api-docs`

## Tech Stack

- Express 
- TypeScript
- Prisma 6.19.2
- MongoDB
