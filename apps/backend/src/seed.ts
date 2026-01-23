import prisma from './db.js';

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    active: true,
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'editor',
    active: true,
  },
  {
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'viewer',
    active: false,
  },
  {
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'admin',
    active: true,
  },
  {
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    role: 'editor',
    active: false,
  },
  {
    name: 'Diana Martinez',
    email: 'diana.martinez@example.com',
    role: 'viewer',
    active: true,
  },
  {
    name: 'Edward Lee',
    email: 'edward.lee@example.com',
    role: 'admin',
    active: true,
  },
  {
    name: 'Fiona Garcia',
    email: 'fiona.garcia@example.com',
    role: 'viewer',
    active: false,
  },
];

async function seed() {
  console.log('Seeding database...');

  await prisma.user.deleteMany();

  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  console.log('Database seeded successfully!');
  process.exit(0);
}

seed().catch((error) => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
