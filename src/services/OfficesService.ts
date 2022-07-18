import * as repository from '../database/repositories/OfficesRepository'
import { OfficeInput, OfficeOutput } from "../api/models/OfficesModels"

export const getAll = async (): Promise<OfficeOutput[]> => {
    return await repository.getAll();
}

export const getById = async (officeCode:number): Promise<OfficeOutput>=> {
    return await repository.getById(officeCode);
} 

export const create = async (payload: OfficeInput): Promise<OfficeOutput> => {
    return await repository.create(payload)
}

export const updateById = async (officeCode:number, payload: OfficeInput):Promise<OfficeOutput> =>{
    return await repository.updateById(officeCode, payload);
};

export const deleteById = async (officeCode:number):Promise<void> =>{
    await repository.deleteById(officeCode);
};

function officeCode(officeCode: any, payload: OfficeInput): OfficeOutput | PromiseLike<OfficeOutput> {
    throw new Error('Function not implemented.');
}
