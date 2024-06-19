const Joi = require('joi');

const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().integer().max(new Date().getFullYear()).min(1900)
    .required(),
});

module.exports = { AlbumPayloadSchema };
