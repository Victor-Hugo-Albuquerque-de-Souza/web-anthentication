import {celebrate, Joi, Segments} from 'celebrate';

export const PaymentCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.string().required(),
        checkNumber: Joi.string().required(),
        paymentDate:Joi.string().required(),
        amount:Joi.string().required()
    })
})