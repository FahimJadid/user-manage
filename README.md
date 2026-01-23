# User Management System - 

A full-stack user management application built with React, TypeScript, Express, and MongoDB.

## Project Structure

```
├── apps/
│   ├── frontend/    # Vite + React + TypeScript + React Query
│   └── backend/     # Express + TypeScript + Prisma + MongoDB
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

## Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Query** - Data fetching and caching
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components

### Backend
- **Express** - Web framework
- **TypeScript** - Type safety
- **Prisma 6.19.2** - ORM
- **MongoDB** - Database

## Features Implemented

### Core Requirements ✅
- [x] Search users by name
- [x] Filter users by role (admin, editor, viewer)
- [x] Sort users by name (ascending/descending)
- [x] User details panel
- [x] Loading skeleton states
- [x] Toggle user active status

### Bonus Features ✅
- [x] Viewing profile timer (seconds counter)
- [x] Query cancellation (automatic via React Query)
- [x] Optimistic updates on toggle
- [x] Strong TypeScript typing (no `any` types)
- [x] Disable sort button while loading

## Setup Instructions

### Prerequisites
- Node.js 19+ and PNPM installed
- MongoDB Atlas account (or local MongoDB)

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Frontend Setup

```bash
cd apps/frontend
cp .env.example .env
```

Edit `.env` if your backend runs on a different port.

### 3. Backend Setup

```bash
cd apps/backend
cp .env.example .env
```

Add your MongoDB connection string to `.env`:
```
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/userdb"
```

### 4. Run Development Servers

**Terminal 1 - Frontend:**
```bash
pnpm dev:frontend
```
Frontend runs on `http://localhost:3000`

**Terminal 2 - Backend:**
```bash
pnpm dev:backend
```
Backend runs on `http://localhost:3002`
