import Customer, { CustomerInput, CustomerOutput } from '../../api/models/CustomersModels'
import { AppError } from '../../utils/AppError';
import { Op } from 'sequelize';
import {Query} from '../../shared/types/query';
import {getPagination} from '../../utils/getPagination';

export const getAll = async (customerName:string, creditLimit:string, creditLimitTop:string, creditLimitMin:string, query:Query): Promise<{rows:CustomerOutput[], count:number}> =>{
    let { size, page, sort, order, ...filters } = query;
    const id="customerNumber";
    const {...pagination}=getPagination(id,query);

    if(!customerName) customerName = "";
    if(!creditLimit) creditLimit ="";
    if(!creditLimitMin) creditLimitMin="500";
    if(!creditLimitTop) creditLimitTop="150000";

    return await Customer.findAndCountAll({
        where:{
            customerName: {[Op.like]: `%${customerName}`},
            creditLimit:{[Op.between]:[parseInt(creditLimitMin),parseInt(creditLimitTop)]},
            ...filters
        },
        ...pagination,
        // include:{all:true}
    });
}

export const getById = async (customerNumber:number): Promise<CustomerOutput>=> {
    const customer = await Customer.findOne({
        where:{
            customerNumber:customerNumber
        },
        include:{all:true, nested:true}
    });
    if (!customer){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return customer;
};

export const create = async (payload: CustomerInput):Promise<CustomerOutput> =>{
    return await Customer.create(payload);
};

export const updateById = async (customerNumber:number, payload: CustomerInput):Promise<CustomerOutput> =>{
    const customer= await Customer.findByPk(customerNumber);
    if(!customer){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await customer.update(payload);
};

export const deleteById = async (customerNumber:number):Promise<void> =>{
    const customer= await Customer.findByPk(customerNumber);
    if(!customer){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await customer.destroy()
};