const Joi = require('joi');

const taskValidationSchema = Joi.object({
    title: Joi.string()
        .max(30)
        .required(),

    description: Joi.string()
        .required(),
    status: Joi.string()
        .optional()
})
  .with('title', 'description');


module.exports = taskValidationSchema;
