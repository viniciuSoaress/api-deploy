import { Router } from "express";
import prisma from "../lib/db";

export const router = Router()


router.get('/', async (req, res) => {
  const revenue = await prisma.revenue.findMany()
  res.send(revenue)
})

router.post('/', async (req, res) => {
  const {month, revenue} = req.body
  await prisma.revenue.create({
    data: {
      month,
      revenue
    }
  })
  res.send('create')
})