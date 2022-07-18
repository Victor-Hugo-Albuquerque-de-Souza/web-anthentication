import * as repository from '../database/repositories/OrdersRepository'
import { OrderInput, OrderOutput } from "../api/models/OrdersModels"
import {Query} from '../shared/types/query'

export const getAll = async (orderDate:string, dateMin:string, dateMax:string, query:Query): Promise<{rows:OrderOutput[], count:number}> => {
    return await repository.getAll(orderDate, dateMin, dateMax, query);
}

export const getById = async (orderNumber:number): Promise<OrderOutput>=> {
    return await repository.getById(orderNumber);
} 

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
    return await repository.create(payload)
}

export const updateById = async (orderNumber:number, payload: OrderInput):Promise<OrderOutput> =>{
    return await repository.updateById(orderNumber, payload);
};

export const deleteById = async (orderNumber:number):Promise<void> =>{
    await repository.deleteById(orderNumber);
};

function OrderNumber(orderNumber: any, payload: OrderInput): OrderOutput | PromiseLike<OrderOutput> {
    throw new Error('Function not implemented.');
}
