import express from 'express'

const app = express()
const port = 4000

app.get('/', (_req,res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`)
})