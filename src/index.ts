import express from 'express'
import prisma from './lib/db'

const app = express()
const port = process.env.PORT || 8182

app.get('/', async (req, res) => {
  const users = await prisma.users.findMany()
  res.send(users)
})

app.listen(port, () => {
  console.log('api funcionando');
})