import {celebrate, Joi, Segments} from 'celebrate';

export const OfficesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        officeCode:Joi.string().required(),
        city:Joi.string().required(),
        phone:Joi.string().required(),
        addressLine1:Joi.string().required(),
        addressLine2:Joi.string().required(),
        state:Joi.string().required(),
        country:Joi.string().required(),
        postalCode:Joi.string().required(),
    })
})