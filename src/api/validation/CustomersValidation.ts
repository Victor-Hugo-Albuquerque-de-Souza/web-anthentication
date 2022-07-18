import {celebrate, Joi, Segments} from 'celebrate';

export const CustomersCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber:Joi.string().required(),
        customerName:Joi.string().required(),
        contactLastName:Joi.string().required(),
        contactFirstName:Joi.string().required(),
        phone:Joi.string().required(),
        addressLine1:Joi.string().required(),
        addressLine2:Joi.string().required(),
        city:Joi.string().required(),
        state:Joi.string().required(),
        postalCode:Joi.string().required(),
        country:Joi.string().required(),
        salesRepEmployeeNumber:Joi.string().required(),
        creditLimit:Joi.string().required()
    })
})
