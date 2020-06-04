let express = require( "express" );
let router = express.Router();
let contr = require( './item.controller' )
router.route( '/addItemToCategory' ).post(  contr.addItemToCategory )
// router.route( '/getAllCategories' ).get( contr.getAllcategories )
module.exports = router;