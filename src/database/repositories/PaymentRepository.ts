import Payment, { PaymentInput, PaymentOutput } from '../../api/models/PaymentsModels'
import { AppError } from '../../utils/AppError';

export const getAll = async (): Promise<PaymentOutput[]> =>{
    return await Payment.findAll({
        include:{all:true}
    });
}

export const getById = async (customerNumber:number): Promise<PaymentOutput>=> {
    const payment = await Payment.findOne({
        where:{
            customerNumber:customerNumber
        },
        include:{all:true, nested:true}
    });
    if (!payment){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return payment;
};

export const create = async (payload: PaymentInput):Promise<PaymentOutput> =>{
    return await Payment.create(payload);
};

export const updateById = async (customerNumber:number, payload: PaymentInput):Promise<PaymentOutput> =>{
    const payment= await Payment.findByPk(customerNumber);
    if(!payment){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await payment.update(payload);
};

export const deleteById = async (customerNumber:number):Promise<void> =>{
    const payment= await Payment.findByPk(customerNumber);
    if(!payment){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await payment.destroy()
};