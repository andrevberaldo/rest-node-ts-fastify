import fastify from 'fastify'

const app = fastify()
const port = 3333

app.get('/', async () => {
  return 'Server successfully Reached'
})

app.listen({ port }).then(() => console.log(`SERVER RUNNING ON PORT ${port}`))
