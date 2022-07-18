import * as repository from '../database/repositories/CustomersRepository'
import { CustomerInput, CustomerOutput } from "../api/models/CustomersModels"
import { Query } from '../shared/types/query';

export const getAll = async (customerName: string, creditLimit:string, creditLimitTop:string, creditLimitMin:string, query: Query): Promise<{rows:CustomerOutput[], count:number}> => {
    return await repository.getAll(customerName, creditLimit, creditLimitTop, creditLimitMin, query);
}

export const getById = async (customerNumber:number): Promise<CustomerOutput>=> {
    return await repository.getById(customerNumber);
} 

export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
    return await repository.create(payload)
}

export const updateById = async (customerNumber:number, payload: CustomerInput):Promise<CustomerOutput> =>{
    return await repository.updateById(customerNumber, payload);
};

export const deleteById = async (customerNumber:number):Promise<void> =>{
    await repository.deleteById(customerNumber);
};

function customerNumber(customerNumber: any, payload: CustomerInput): CustomerOutput | PromiseLike<CustomerOutput> {
    throw new Error('Function not implemented.');
}
