import express, { json } from 'express'
import prisma from './lib/db'
import { router } from './router/revenue'

const app = express()
const port = process.env.PORT || 8182

app.use(express.json())

app.get('/', async (req, res) => {
  const users = await prisma.users.findMany()
  res.send(users)
})
app.use('/revenue', router)

app.listen(port, () => {
  console.log('api funcionando');
})