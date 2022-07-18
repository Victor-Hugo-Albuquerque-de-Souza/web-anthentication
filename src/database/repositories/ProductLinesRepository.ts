import ProductLine, { ProductLinesInput, ProductLinesOutput } from '../../api/models/ProductLinesModels'
import { AppError } from '../../utils/AppError';

export const getAll = async (): Promise<ProductLinesOutput[]> =>{
    return await ProductLine.findAll({
        include:{all:true}
    });
}

export const getById = async (productLine:number): Promise<ProductLinesOutput>=> {
    const productsLine = await ProductLine.findOne({
        where:{
            productLine:productLine
        },
        include:{all:true, nested:true}
    });
    if (!productsLine){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return productsLine;
};

export const create = async (payload: ProductLinesInput):Promise<ProductLinesOutput> =>{
    return await ProductLine.create(payload);
};

export const updateById = async (productLine:number, payload: ProductLinesInput):Promise<ProductLinesOutput> =>{
    const productsLine= await ProductLine.findByPk(productLine);
    if(!productsLine){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await productsLine.update(payload);
};

export const deleteById = async (productLine:number):Promise<void> =>{
    const productsLine= await ProductLine.findByPk(productLine);
    if(!productsLine){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await productsLine.destroy()
};