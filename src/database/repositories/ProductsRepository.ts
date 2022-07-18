import Product, { ProductInput, ProductOutput } from '../../api/models/ProductsModels'
import { Query } from '../../shared/types/query';
import { AppError } from '../../utils/AppError';
import { getPagination } from '../../utils/getPagination';
import { Op } from 'sequelize';

export const getAll = async (quantityInStock:string, quantityInStockMin:string, quantityInStockTop:string, query:Query): Promise<{rows:ProductOutput[], count:number}> =>{
    let { size, page, sort, order, ...filters } = query;
    const id="productCode";
    const {...pagination}=getPagination(id,query);

    if(!quantityInStock) quantityInStock = "";
    if(!quantityInStockMin) quantityInStockMin = "0";
    if(!quantityInStockTop) quantityInStockTop = "100000";

    return await Product.findAndCountAll({
        where:{
            quantityInStock:{[Op.between]:[parseInt(quantityInStockMin),parseInt(quantityInStockTop)]},
            ...filters
        },
        ...pagination,
        // include:{all:true}
    });
}

export const getById = async (productCode:string): Promise<ProductOutput>=> {
    const product = await Product.findOne({
        where:{
            productCode:productCode
        },
        include:{all:true, nested:true}
    });
    if (!product){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return product;
};

export const create = async (payload: ProductInput):Promise<ProductOutput> =>{
    return await Product.create(payload);
};

export const updateById = async (productCode:string, payload: ProductInput):Promise<ProductOutput> =>{
    const product= await Product.findByPk(productCode);
    if(!product){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await product.update(payload);
};

export const deleteById = async (productCode:string):Promise<void> =>{
    const product= await Product.findByPk(productCode);
    if(!product){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await product.destroy()
};