import * as repository from '../database/repositories/EmployeesRepository'
import { EmployeeInput, EmployeeOutput } from "../api/models/EmployeesModels"

export const getAll = async (): Promise<EmployeeOutput[]> => {
    return await repository.getAll();
}

export const getById = async (employeeNumber:number): Promise<EmployeeOutput>=> {
    return await repository.getById(employeeNumber);
} 

export const create = async (payload: EmployeeInput): Promise<EmployeeOutput> => {
    return await repository.create(payload)
}

export const updateById = async (employeeNumber:number, payload: EmployeeInput):Promise<EmployeeOutput> =>{
    return await repository.updateById(employeeNumber, payload);
};

export const deleteById = async (employeeNumber:number):Promise<void> =>{
    await repository.deleteById(employeeNumber);
};

function EmployeeNumber(employeeNumber: any, payload: EmployeeInput): EmployeeOutput | PromiseLike<EmployeeOutput> {
    throw new Error('Function not implemented.');
}
