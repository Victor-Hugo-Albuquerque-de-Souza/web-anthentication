import {Request, Response} from 'express';
import * as service from "../../services/AuthService";

export const signUp = async (req: Request, res: Response)=>{
    res.send(await service.signUp(req.body));
};

export const signIn = async (req: Request, res: Response)=>{
    res.send(await service.signIn(req.body));
};