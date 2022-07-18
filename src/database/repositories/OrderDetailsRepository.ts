import OrderDetails, { OrderDetailsInput, OrderDetailsOutput } from '../../api/models/OrderDetailsModels'
import { AppError } from '../../utils/AppError';

export const getAll = async (): Promise<OrderDetailsOutput[]> =>{
    return await OrderDetails.findAll({
        include:{all:true}
    });
}

export const getById = async (orderNumber:number): Promise<OrderDetailsOutput>=> {
    const orderDetails = await OrderDetails.findOne({
        where:{
            orderNumber:orderNumber
        },
        include:{all:true, nested:true}
    });
    if (!orderDetails){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return orderDetails;
};

export const create = async (payload: OrderDetailsInput):Promise<OrderDetailsOutput> =>{
    return await OrderDetails.create(payload);
};

export const updateById = async (orderNumber:number, payload: OrderDetailsInput):Promise<OrderDetailsOutput> =>{
    const orderDetails= await OrderDetails.findByPk(orderNumber);
    if(!orderDetails){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await orderDetails.update(payload);
};

export const deleteById = async (orderNumber:number):Promise<void> =>{
    const orderDetails= await OrderDetails.findByPk(orderNumber);
    if(!orderDetails){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await orderDetails.destroy()
};