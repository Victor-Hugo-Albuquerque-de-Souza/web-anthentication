import {celebrate, Joi, Segments} from 'celebrate';

export const EmployeesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        employeeNumber:Joi.string().required(),
        lastName:Joi.string().required(),
        firstName:Joi.string().required(),
        extension:Joi.string().required(),
        email:Joi.string().required(),
        officeCode:Joi.string().required(),
        reportsTo:Joi.string().required(),
        jobTitle:Joi.string().required(),
    })
})