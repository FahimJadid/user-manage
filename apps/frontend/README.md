# Frontend

React + TypeScript + Vite application with React Query for data fetching.

## Commands

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build
```

## Structure

```
src/
├── components/         # React components
│   ├── ui/            # shadcn/ui base components
│   ├── SearchBar.tsx
│   ├── RoleFilter.tsx
│   ├── SortButton.tsx
│   ├── UserList.tsx
│   ├── UserListItem.tsx
│   └── UserDetails.tsx
├── hooks/             # Custom React hooks
│   ├── useUsers.ts    # React Query hooks
│   ├── useDebounce.ts
│   └── useViewingTimer.ts
├── lib/               # Utilities
│   ├── api.ts         # API client
│   └── utils.ts       # Helper functions
├── types/             # TypeScript types
│   └── user.ts
├── App.tsx            # Main application
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Key Features

- **React Query** for server state management
- **Debounced search** to reduce API calls
- **Optimistic updates** for instant feedback
- **Loading skeletons** for better UX
- **Type-safe** throughout
