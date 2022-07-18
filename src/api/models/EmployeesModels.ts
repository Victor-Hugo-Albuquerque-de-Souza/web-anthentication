import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';
import Customer from './CustomersModels'

interface EmployeeAttributes {
    employeeNumber:string;
    lastName?:string;
    firstName?:string;
    extension?:string;
    email?:string;
    officeCode?:string;
    reportsTo?:number;
    jobTitle:string;
};

export interface EmployeeInput extends Optional <EmployeeAttributes, 'employeeNumber'>{};
export interface EmployeeOutput extends Required <EmployeeAttributes>{};

class Employee extends Model<EmployeeAttributes, EmployeeInput> {
    declare employeeNumber:string;
    declare lastName:string;
    declare firstName:string;
    declare extension:string;
    declare email:string;
    declare officeCode:string;
    declare reportsTo:number;
    declare jobTitle:string;
};

Employee.init({
    employeeNumber:{type : DataTypes.SMALLINT, primaryKey:true, autoIncrement:true  },
    lastName:{type: DataTypes.STRING},
    firstName:{type: DataTypes.STRING},
    extension:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING},
    officeCode:{type: DataTypes.STRING},
    reportsTo:{type: DataTypes.INTEGER},
    jobTitle:{type: DataTypes.STRING(50), allowNull:false}
},{
    sequelize, 
    modelName: 'employees',
    paranoid:true
});

Employee.hasMany(Customer, {foreignKey:"salesRepEmployeeNumber"});
Customer.belongsTo(Employee,{foreignKey:"salesRepEmployeeNumber"});

export default Employee