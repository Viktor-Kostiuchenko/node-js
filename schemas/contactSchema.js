const Joi = require('joi');

const addContact = Joi.object({
  name: Joi.string().min(2).max(20),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string()
    .min(3)
    .pattern(/^[0-9]+$/)
    .messages({ 'string.pattern.base': `Phone number must have only digits.` })
    .required(),
});

const updateContact = Joi.object({
  name: Joi.string().min(2).max(20),
  email: Joi.string().email({ minDomainSegments: 2 }),
  phone: Joi.string()
    .min(3)
    .pattern(/^[0-9]+$/)
    .messages({ 'string.pattern.base': `Phone number must have only digits.` }),
}).or('name', 'email', 'phone');

module.exports = { addContact, updateContact };
