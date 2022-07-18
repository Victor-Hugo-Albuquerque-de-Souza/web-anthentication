import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface OrderDetailsAttributes {
    orderNumber:number;
    productCode:string;
    quantityOrdered:number;
    priceEach:number;
    orderLineNumber:number;
};

export interface OrderDetailsInput extends Optional <OrderDetailsAttributes, 'orderNumber'>{};
export interface OrderDetailsOutput extends Required <OrderDetailsAttributes>{};

class OrderDetail extends Model<OrderDetailsAttributes, OrderDetailsInput> {
    declare orderNumber:number;
    declare productCode:string;
    declare quantityOrdered:number;
    declare priceEach:number;
    declare orderLineNumber:number;
};

OrderDetail.init({ 
    orderNumber:{type : DataTypes.INTEGER, primaryKey:true, autoIncrement:true  },
    productCode:{type: DataTypes.STRING(15), allowNull:false},
    quantityOrdered:{type: DataTypes.INTEGER, allowNull:false},
    priceEach:{type: DataTypes.INTEGER, allowNull:false},
    orderLineNumber:{type: DataTypes.INTEGER, allowNull:false}
},{
    sequelize, 
    modelName: 'OrderDetails'
});


export default OrderDetail