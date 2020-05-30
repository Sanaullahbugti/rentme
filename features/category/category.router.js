let express = require( "express" );
let router = express.Router();
let validation = require( './category.validation' )
let contr = require( './category.controller' )
router.route( '/addCategory' ).post( validation.addCategoryValidation, contr.addCategory )
router.route( '/getAllCategories' ).get( contr.getAllcategories )
module.exports = router;