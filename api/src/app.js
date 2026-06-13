const express = require('express')
const app = express()

app.use(express.json())

// Rota temporária só para validar que o container sobe
app.get('/producoes', (req, res) => {
  res.json({ data: [], page: 1, limit: 10, total: 0 })
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`)
})
