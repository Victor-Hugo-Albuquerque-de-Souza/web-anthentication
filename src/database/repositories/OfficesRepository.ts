import Office, { OfficeInput, OfficeOutput } from '../../api/models/OfficesModels'
import { AppError } from '../../utils/AppError';
import Employee from '../../api/models/EmployeesModels';

export const getAll = async (): Promise<OfficeOutput[]> =>{
    return await Office.findAll({
        include:Employee
    });
}

export const getById = async (officeCode:number): Promise<OfficeOutput>=> {
    const office = await Office.findOne({
        where:{
            officeCode:officeCode
        },
        include:Employee
    });
    if (!office){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return office;
};

export const create = async (payload: OfficeInput):Promise<OfficeOutput> =>{
    return await Office.create(payload);
};

export const updateById = async (officeCode:number, payload: OfficeInput):Promise<OfficeOutput> =>{
    const office= await Office.findByPk(officeCode);
    if(!office){
        throw new AppError('NotFoundError', 'Registro não Encontrado', 404);
    }
    return await office.update(payload);
};

export const deleteById = async (officeCode:number):Promise<void> =>{
    const office= await Office.findByPk(officeCode);
    if(!office){
        throw new AppError('NotFoundErro','Registro não Encontrado', 404);
    }
    return await office.destroy()
};