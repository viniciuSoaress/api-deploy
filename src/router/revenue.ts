import { Router } from "express";
import prisma from "../lib/db";

export const router = Router()


router.get('/', async (req, res) => {
  const revenue = await prisma.revenue.findMany()
  res.send(revenue)
})