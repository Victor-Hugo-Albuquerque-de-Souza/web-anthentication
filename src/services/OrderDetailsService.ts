import * as repository from '../database/repositories/OrderDetailsRepository'
import { OrderDetailsInput, OrderDetailsOutput } from "../api/models/OrderDetailsModels"

export const getAll = async (): Promise<OrderDetailsOutput[]> => {
    return await repository.getAll();
}

export const getById = async (orderNumber:number): Promise<OrderDetailsOutput>=> {
    return await repository.getById(orderNumber);
} 

export const create = async (payload: OrderDetailsInput): Promise<OrderDetailsOutput> => {
    return await repository.create(payload)
}

export const updateById = async (orderNumber:number, payload: OrderDetailsInput):Promise<OrderDetailsOutput> =>{
    return await repository.updateById(orderNumber, payload);
};

export const deleteById = async (orderNumber:number):Promise<void> =>{
    await repository.deleteById(orderNumber);
};

function OrderDetailCode(orderNumber: any, payload: OrderDetailsInput): OrderDetailsOutput | PromiseLike<OrderDetailsOutput> {
    throw new Error('Function not implemented.');
}
