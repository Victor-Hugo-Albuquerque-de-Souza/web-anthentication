import * as repository from '../database/repositories/PaymentRepository'
import { PaymentInput, PaymentOutput } from "../api/models/PaymentsModels"

export const getAll = async (): Promise<PaymentOutput[]> => {
    return await repository.getAll();
}

export const getById = async (customerNumber:number): Promise<PaymentOutput>=> {
    return await repository.getById(customerNumber);
} 

export const create = async (payload: PaymentInput): Promise<PaymentOutput> => {
    return await repository.create(payload)
}

export const updateById = async (customerNumber:number, payload: PaymentInput):Promise<PaymentOutput> =>{
    return await repository.updateById(customerNumber, payload);
};

export const deleteById = async (customerNumber:number):Promise<void> =>{
    await repository.deleteById(customerNumber);
};

function customerNumber(customerNumber: any, payload: PaymentInput): PaymentOutput | PromiseLike<PaymentOutput> {
    throw new Error('Function not implemented.');
}
