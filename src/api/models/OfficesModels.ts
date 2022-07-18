import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';
import Employee from './EmployeesModels'

interface OfficeAttributes {
    officeCode:string;
    city:string;
    phone:string;
    addressLine1:string;
    addressLine2?:string;
    state?:string;
    country:string;
    postalCode:string;
    territory:string;
};

export interface OfficeInput extends Optional <OfficeAttributes, 'officeCode'>{};
export interface OfficeOutput extends Required <OfficeAttributes>{};

class Office extends Model<OfficeAttributes, OfficeInput> {
   declare officeCode:string;
   declare city:string;
   declare phone:string;
   declare addressLine1:string;
   declare addressLine2:string;
   declare state:string;
   declare country:string;
   declare postalCode:string;
   declare territory:string;
};

Office.init({
    officeCode:{type : DataTypes.STRING(10), primaryKey:true, autoIncrement:true  },
    city:{type: DataTypes.STRING(50), allowNull:false},
    phone:{type: DataTypes.STRING(50), allowNull:false},
    addressLine1:{type: DataTypes.STRING(50), allowNull:false},
    addressLine2:{type: DataTypes.STRING(50)},
    state:{type: DataTypes.STRING(50)},
    country:{type: DataTypes.STRING(50), allowNull:false},
    postalCode:{type: DataTypes.STRING(15), allowNull:false},
    territory:{type: DataTypes.STRING(10), allowNull:false}
},{
    sequelize, 
    modelName: 'offices'
});

Office.hasMany(Employee, {foreignKey:"officeCode"});

export default Office