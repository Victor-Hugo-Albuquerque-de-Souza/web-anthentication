import {celebrate, Joi, Segments} from 'celebrate';

export const ProductCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        MSRP: Joi.string().required(),
        buyPrice:Joi.string().required(),
        quantityInStock: Joi.string().required(),
        productDescription:Joi.string().required(),
        productVendor: Joi.string().required(),
        productScale: Joi.string().required(),
        productLine: Joi.string().required(),
        productName: Joi.string().required(),
        productCode: Joi.string().required()
    })
})

    