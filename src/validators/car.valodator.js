import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().min(1).max(20).required().messages({
        "string.empty": "Model dose not empty",
        "string.min":"Should be more then 1 letter",
        "string.max":"Should be less than 20 letters",

    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        "number.min": "Price Should be more then 0",
        "number.max":"Price Should be less than 1 000 000 ",
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {carValidator}


