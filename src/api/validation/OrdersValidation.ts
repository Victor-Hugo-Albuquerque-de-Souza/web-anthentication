import {celebrate, Joi, Segments} from 'celebrate';

export const OrdersCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        orderNumber: Joi.string().required(),
        customerNumber: Joi.string().required(),
        comments: Joi.string().required(),
        status:Joi.string().required(),
        shippedDate:Joi.string().required(),
        requiredDate: Joi.string().required(),
        orderDate:Joi.string().required()
    })
})
