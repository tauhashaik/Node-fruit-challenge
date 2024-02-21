import express from 'express';
import {config} from 'dotenv';
import cors from 'cors'
import bcrypt from 'bcrypt'
import productsRouter from '../backend/routes/products.js';
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
config()

const PORT=process.env.PORT || 5000

const app=express()

app.use(cors())

app.use(express.json())

app.use(express.static('views'))

app.use(cookieParser())

app.use('/products', productsRouter)

app.listen (PORT,()=>{
    console.log(`this is listening on http://localhost:${PORT}`)
})
