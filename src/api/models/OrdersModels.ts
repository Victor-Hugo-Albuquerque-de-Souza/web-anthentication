import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface OrderAttributes {
    orderNumber:string;
    customerNumber:number;
    comments?:string;
    status:string;
    shippedDate?:string;
    requiredDate:string;
    orderDate:string;
};

export interface OrderInput extends Optional <OrderAttributes, 'orderNumber'>{};
export interface OrderOutput extends Required <OrderAttributes>{};

class Order extends Model<OrderAttributes, OrderInput> {
    declare orderNumber:string;
    declare customerNumber:number;
    declare comments:string;
    declare status:string;
    declare shippedDate:string;
    declare requiredDate:string;
    declare orderDate:string;
};

Order.init({
    orderNumber:{type:DataTypes.SMALLINT, primaryKey:true, autoIncrement:true},
    customerNumber:{type:DataTypes.SMALLINT, allowNull:false},
    comments:{type:DataTypes.TEXT},
    status:{type:DataTypes.STRING(15), allowNull:false},
    shippedDate:{type:DataTypes.DATE},
    requiredDate:{type:DataTypes.DATE, allowNull:false},
    orderDate:{type:DataTypes.DATE, allowNull:false}
},{
    sequelize, 
    modelName: 'orders'
});

export default Order