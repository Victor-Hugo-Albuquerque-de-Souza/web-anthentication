import {Router, Request, Response, NextFunction} from 'express';
import * as service from '../../services/CustomersService'

export const getAll = async (req:Request, res: Response)=>{
    const {size, page, sort, order, customerName, creditLimit, creditLimitTop, creditLimitMin, ...filters}=req.query;
    
    const query = {
        size: parseInt(size as string),
        page: parseInt(page as string),
        sort: sort as string,
        order: order as string,
        ...filters    
    }

    res.send(await service.getAll(customerName as string,
         creditLimit as string,
         creditLimitTop as string,
         creditLimitMin as string,
         query));
};

export const getById = async (req:Request, res: Response, next:NextFunction)=>{
    res.send(await service.getById(parseInt(req.params.customerNumber)));
};

export const create = async (req:Request, res: Response)=>{
    res.status(201).send(await service.create(req.body));
};

export const updateById = async (req:Request, res: Response)=>{
    res.send(await service.updateById(parseInt(req.params.customerNumber), req.body));
};

export const deleteById = async (req:Request, res: Response)=>{
    res.send(await service.deleteById(parseInt(req.params.customerNumber)));
};
