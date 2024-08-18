import express from 'express'
import { mongoose } from 'mongoose';
import router from "./routes/index.js"
import 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 3500;
const app = express()


app.use(cors({
    origin: 'https://toupe-payment-app.onrender.com',
    credentials: true

}));
app.use(express.json())
app.use(morgan('tiny'))
app.use(cookieParser())
app.use('/api/v1', router)

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("DB connected")
    }
    catch (e) {
        console.log(e)
        process.exit(1);
    }
}

app.listen(port, () => {
    connectDB();
    console.log(`Server is running at port ${port}`);
})

