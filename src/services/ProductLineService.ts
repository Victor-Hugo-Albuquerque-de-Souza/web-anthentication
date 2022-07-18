import * as repository from '../database/repositories/ProductLinesRepository'
import { ProductLinesInput, ProductLinesOutput } from "../api/models/ProductLinesModels"

export const getAll = async (): Promise<ProductLinesOutput[]> => {
    return await repository.getAll();
}

export const getById = async (productLine:number): Promise<ProductLinesOutput>=> {
    return await repository.getById(productLine);
} 

export const create = async (payload: ProductLinesInput): Promise<ProductLinesOutput> => {
    return await repository.create(payload)
}

export const updateById = async (productLine:number, payload: ProductLinesInput):Promise<ProductLinesOutput> =>{
    return await repository.updateById(productLine, payload);
};

export const deleteById = async (productLine:number):Promise<void> =>{
    await repository.deleteById(productLine);
};

function productLine(productLine: any, payload: ProductLinesInput): ProductLinesOutput | PromiseLike<ProductLinesOutput> {
    throw new Error('Function not implemented.');
}
