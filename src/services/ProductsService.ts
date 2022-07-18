import * as repository from '../database/repositories/ProductsRepository'
import { ProductInput, ProductOutput } from "../api/models/ProductsModels"
import { Query } from '../shared/types/query';

export const getAll = async (quantityInStock:string, quantityInStockMin:string, quantityInStockTop:string, query:Query):  Promise<{rows:ProductOutput[], count:number}> => {
    return await repository.getAll(quantityInStock, quantityInStockMin, quantityInStockTop, query);
}

export const getById = async (productCode:string): Promise<ProductOutput>=> {
    return await repository.getById(productCode);
} 

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    return await repository.create(payload)
}

export const updateById = async (productCode:string, payload: ProductInput):Promise<ProductOutput> =>{
    return await repository.updateById(productCode, payload);
};

export const deleteById = async (productCode:string):Promise<void> =>{
    await repository.deleteById(productCode);
};

function productCode(productCode: any, payload: ProductInput): ProductOutput | PromiseLike<ProductOutput> {
    throw new Error('Function not implemented.');
}
