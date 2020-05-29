import { Joi, celebrate } from "celebrate";
Joi.objectId = require( "joi-objectid" )( Joi );

exports.addCategoryValidation = celebrate( {
    body: Joi.object().keys( {
        title: Joi.string().required()
    } )
} )