import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface ProductAttributes {
    MSRP?: string;
    buyPrice?: string;
    quantityInStock: string;
    productDescription: string;
    productVendor: string;
    productScale: string;
    productLine: string;
    productName: string;
    productCode : string;
};

export interface ProductInput extends Optional <ProductAttributes, 'productCode'>{};
export interface ProductOutput extends Required <ProductAttributes>{};

class Product extends Model<ProductAttributes, ProductInput> {
    declare MSRP: string;
    declare buyPrice: string;
    declare quantityInStock: string;
    declare productDescription: string;
    declare productVendor: string;
    declare productScale: string;
    declare productLine: string;
    declare productName: string;
    declare productCode: string;
};

Product.init({
    MSRP:{type: DataTypes.DECIMAL(10,2)},
    buyPrice:{type: DataTypes.DECIMAL(10,2)},
    quantityInStock:{type: DataTypes.SMALLINT, allowNull:false},
    productDescription:{type: DataTypes.TEXT, allowNull:false},
    productVendor:{type: DataTypes.STRING(50), allowNull:false},
    productScale:{type: DataTypes.STRING(10), allowNull:false},
    productLine:{type: DataTypes.STRING(50), allowNull:false, },
    productName:{type: DataTypes.STRING(70), allowNull:false},
    productCode:{type : DataTypes.STRING(15), primaryKey:true, autoIncrement:true  }
},{
    sequelize, 
    modelName: 'products'
});

export default Product