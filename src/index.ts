import express, {Request, Response} from "express";

const app = express();

app.use("/api", (_req: Request, res: Response) => {
    res.json({message: "Hello World"});
})

app.listen(4000, ()=> {
    console.log("Server runnig on port 4000");
});