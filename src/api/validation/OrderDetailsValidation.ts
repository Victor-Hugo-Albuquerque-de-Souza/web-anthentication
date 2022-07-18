import {celebrate, Joi, Segments} from 'celebrate';

export const OrderDetailsCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        orderNumber:Joi.number().required(),
        productCode:Joi.string().required(),
        quantityOrdered:Joi.number().required(),
        priceEach:Joi.number().required(),
        orderLineNumber:Joi.number().required(),
    })
})