import {celebrate, Joi, Segments} from 'celebrate';

export const ProductLinesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productLine:Joi.string().required(),
        textDescription:Joi.string().required(),
        htmlDescription:Joi.string().required(),
        image:Joi.string().required()
    })
})
