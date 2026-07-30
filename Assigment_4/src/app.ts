import express,{ Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app: Application = express();


app.use(cors({
    origin: "http://localhost:5000/",
    credentials:true
}))
app.use(express.json());

app.use(cookieParser());


app.get("/", (req: Request, res: Response) => { 
  console.log("Hello");
  
})

export default app;
