import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./errors/appError";

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError)  {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    
    return response.status(500).json({
        status: "error",
        message: `Internal Server Error: ${err.message}`
    })
})

app.listen(4000, () => console.log('listening on port 4000'));