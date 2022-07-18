import Employee, { EmployeeInput, EmployeeOutput } from '../../api/models/EmployeesModels'
import { AppError } from '../../utils/AppError';

export const getAll = async (): Promise<EmployeeOutput[]> =>{
    return await Employee.findAll({
        include:{all:true}
    });
}

export const getById = async (employeeNumber:number): Promise<EmployeeOutput>=> {
    const employee = await Employee.findOne({
        where:{
            employeeNumber:employeeNumber
        },
        include:{all:true, nested:true}
    });
    if (!employee){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return employee;
};

export const create = async (payload: EmployeeInput):Promise<EmployeeOutput> =>{
    return await Employee.create(payload);
};

export const updateById = async (employeeNumber:number, payload: EmployeeInput):Promise<EmployeeOutput> =>{
    const employee= await Employee.findByPk(employeeNumber);
    if(!employee){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await employee.update(payload);
};

export const deleteById = async (employeeNumber:number):Promise<void> =>{
    const employee= await Employee.findByPk(employeeNumber);
    if(!employee){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await employee.destroy()
};