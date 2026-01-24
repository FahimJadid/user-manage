export const swaggerDoc = {
  openapi: '3.0.0',
  info: {
    title: 'User Management API',
    version: '1.0.0',
    description: 'API for managing users with search, filter, and toggle functionality',
  },
  servers: [
    {
      url: 'http://localhost:3002',
      description: 'Development server',
    },
  ],
  paths: {
    '/users': {
      get: {
        summary: 'Get all users',
        description: 'Retrieve a list of users with optional search and role filter',
        parameters: [
          {
            name: 'search',
            in: 'query',
            description: 'Search users by name',
            required: false,
            schema: { type: 'string' },
          },
          {
            name: 'role',
            in: 'query',
            description: 'Filter users by role',
            required: false,
            schema: { type: 'string', enum: ['admin', 'editor', 'viewer'] },
          },
        ],
        responses: {
          '200': {
            description: 'List of users',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/User' },
                },
              },
            },
          },
        },
      },
    },
    '/users/{id}': {
      get: {
        summary: 'Get user by ID',
        description: 'Retrieve a single user by their ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'User details',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/User' },
              },
            },
          },
          '404': {
            description: 'User not found',
          },
        },
      },
    },
    '/users/{id}/toggle-active': {
      patch: {
        summary: 'Toggle user active status',
        description: 'Toggle the active status of a user',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'Updated user',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/User' },
              },
            },
          },
          '404': {
            description: 'User not found',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          email: { type: 'string' },
          role: { type: 'string', enum: ['admin', 'editor', 'viewer'] },
          active: { type: 'boolean' },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};
