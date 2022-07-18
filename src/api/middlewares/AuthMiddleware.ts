import {NextFunction, Request, Response} from 'express';
import { AppError } from '../../utils/AppError';
import jwt from 'jsonwebtoken';
import {secret} from "../../config/auth.config";

export const ensureIsAuthenticated = (req: Request, res: Response, next: NextFunction)=>{
    const token = req.headers.authorization;

    if (!token){
        throw new AppError ("MissedToken", "Token não está presente", 401);
    }

    try{
        jwt.verify(token,secret);
    } catch (err){
        throw new AppError("InvalidToken", "Token inválido", 401);
    }

    next();
};