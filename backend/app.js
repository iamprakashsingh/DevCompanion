import express from 'express'
import morgan from 'morgan'
import connect from './db/db.js'
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
connect(); 
const app = express();
// now the morgan will give us the log for every http request
// ye isliye lagaya hai taki wo console me CORS policy wala error na aaye ki backend agar resources ko use kr
// raha hai to koi or nhi kr skta hum frontend ko allow kr rhe hain
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());

app.use('/users',userRoutes) // to yaha pr hmne routes ko connect krne ke liye middleware laga lia hai ab yaha jo routes honge
// wo is type ke honge localhost:3000/user/register or localhost:3000/user/any_name 
app.get('/',(req,res)=>{
    res.send("Hello World")
})


// this is not commonjs thatswhy we didn't use module.exports = app
export default app;