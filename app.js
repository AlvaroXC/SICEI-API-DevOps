import express from 'express'
import studensRoutes from './routes/studentRoutes.js'
import teacherRoutes from './routes/teacherRoutes.js'

const app = express()

const port = 4000; 

app.use('/api/students', studensRoutes)
app.use('/api/teachers', teacherRoutes)

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})