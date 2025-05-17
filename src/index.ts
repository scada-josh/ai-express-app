import dotenv from 'dotenv';
dotenv.config();

import express, {NextFunction, Request, Response} from "express";
import cors from "cors";
import morgan from 'morgan';
import path from 'node:path';
import { errorHandler } from './middlewares/error-handler';
import { AppError } from './utils/app-error';

const app = express();

app.use(cors()); // allow all origin
app.use(morgan('dev'));
app.use(express.json({limit: "50mb"}));

// สำหรับ Express V4
// app.use("/api", (_req: Request, res: Response, next: NextFunction) => {
//     try {
//         throw new AppError(404, "ไม่พบข้อมูลนี้ในระบบ");
//         // res.json({message: "Hello World"});
//     } catch (error) {
//         next(error);
//     }
// })


// สำหรับ Express V5
app.use("/api", (_req: Request, res: Response) => {
        // throw new AppError(401, "ไม่พบข้อมูลนี้ในระบบ");
        res.json({message: "Express.js V5 API"});
});

app.use(express.static(path.join(__dirname, 'public')));

// global error handler (ต้องอยู่บรรทัดสุดท้ายของ routers)
app.use(errorHandler);

app.listen(process.env.PORT, ()=> {
    // console.log("Server runnig on port 4000");
    console.log(`Server runnig on port ${process.env.PORT} ENV: ${process.env.NODE_ENV}`);
});