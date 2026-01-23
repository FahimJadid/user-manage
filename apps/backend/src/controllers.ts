import type { Request, Response } from 'express';
import { findUsers, findUserById, toggleUserActive } from './services.js';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { search, role } = req.query;
    
    const users = await findUsers({
      search: search as string,
      role: role as any,
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const user = await findUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

export const toggleActive = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const user = await toggleUserActive(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};
