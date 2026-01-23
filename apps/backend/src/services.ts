import prisma from './db.js';
import type { UserFilters } from './types.js';

export const findUsers = async (filters: UserFilters) => {
  const where: any = {};

  if (filters.search) {
    where.OR = [
      { name: { contains: filters.search, mode: 'insensitive' } },
      { email: { contains: filters.search, mode: 'insensitive' } },
    ];
  }

  if (filters.role) {
    where.role = filters.role;
  }

  return prisma.user.findMany({ where, orderBy: { createdAt: 'desc' } });
};

export const findUserById = async (id: string) => {
  return prisma.user.findUnique({ where: { id } });
};

export const toggleUserActive = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  
  if (!user) {
    return null;
  }

  return prisma.user.update({
    where: { id },
    data: { active: !user.active },
  });
};
