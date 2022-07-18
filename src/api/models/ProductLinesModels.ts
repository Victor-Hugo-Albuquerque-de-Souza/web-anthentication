import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';
import Product from './ProductsModels'

interface ProductLinesAttributes {
    productLine:string;
    textDescription?:string;
    htmlDescription?:string;
    image?:string;
};

export interface ProductLinesInput extends Optional <ProductLinesAttributes, 'productLine'>{};
export interface ProductLinesOutput extends Required <ProductLinesAttributes>{};

class ProductLines extends Model<ProductLinesAttributes, ProductLinesInput> {
   declare productLine:string;
   declare textDescription:string;
   declare htmlDescription:string;
   declare image:string;
};

ProductLines.init({
    productLine:{type:DataTypes.STRING(50), primaryKey:true, autoIncrement:true},
    textDescription:{type:DataTypes.TEXT},
    htmlDescription:{type:DataTypes.TEXT('medium')},
    image:{type:DataTypes.BLOB('medium')}
},{
    sequelize, 
    modelName: 'productLines'
});

ProductLines.hasMany(Product, {foreignKey:"productLine"});
Product.belongsTo(ProductLines, {as:"product line", foreignKey:"productLine"});

export default ProductLines