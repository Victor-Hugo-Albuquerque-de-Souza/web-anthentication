import Order, { OrderInput, OrderOutput } from '../../api/models/OrdersModels'
import { Query } from '../../shared/types/query';
import { AppError } from '../../utils/AppError';
import { getPagination } from '../../utils/getPagination';
import { Op } from 'sequelize';

export const getAll = async (orderDate:string, dateMin:string, dateMax:string, query:Query): Promise<{rows:OrderOutput[], count:number}> =>{
    let { size, page, sort, order, ...filters } = query;
    const id="orderNumber";
    const {...pagination}=getPagination(id,query);

    if(!orderDate) orderDate = "";
    if(!dateMin) dateMin="1990-01-06 00:00:00";
    if(!dateMax) dateMax="2055-01-06 00:00:00";

    return await Order.findAndCountAll({
        where:{
            orderDate:{[Op.between]:[dateMin, dateMax]},
            ...filters
        },
        ...pagination,
    });
}

export const getById = async (orderNumber:number): Promise<OrderOutput>=> {
    const order = await Order.findOne({
        where:{
            orderNumber:orderNumber
        },
        include:{all:true, nested:true}
    });
    if (!order){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return order;
};

export const create = async (payload: OrderInput):Promise<OrderOutput> =>{
    return await Order.create(payload);
};

export const updateById = async (orderNumber:number, payload: OrderInput):Promise<OrderOutput> =>{
    const order= await Order.findByPk(orderNumber);
    if(!order){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await order.update(payload);
};

export const deleteById = async (orderNumber:number):Promise<void> =>{
    const order= await Order.findByPk(orderNumber);
    if(!order){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await order.destroy()
};

