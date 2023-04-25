const Joi = require("joi");

const CampgroundSchema = Joi.object({
	campground: Joi.object({
		title: Joi.string().required(),
		price: Joi.number().required().min(0),
		image: Joi.string().required(),
		description: Joi.string().required(),
		location: Joi.string().required(),
	}).required(),
});

module.exports = CampgroundSchema;