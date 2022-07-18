import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';
import Customers from './CustomersModels';

interface PaymentAttributes {
    customerNumber: string;
    checkNumber:string;
    paymentDate: string;
    amount:number;
};

export interface PaymentInput extends Optional <PaymentAttributes, 'customerNumber'>{};
export interface PaymentOutput extends Required <PaymentAttributes>{};

class Payment extends Model<PaymentAttributes, PaymentInput> {
    declare customerNumber: string;
    declare checkNumber:string;
    declare paymentDate: string;
    declare amount:number;
};

Payment.init({
    customerNumber: {type:DataTypes.STRING, primaryKey:true, autoIncrement:true, onDelete:"cascade"},
    checkNumber:{type:DataTypes.STRING(50), primaryKey:true, allowNull:false},
    paymentDate: {type:DataTypes.DATE, allowNull:false},
    amount:{type:DataTypes.DECIMAL(10,2), allowNull:false}
},{
    sequelize, 
    modelName: 'payments'
});

Customers.hasOne(Payment, {foreignKey:"customerNumber"});
Payment.belongsTo(Customers, {foreignKey:"customerNumber"});

export default Payment