let express = require( 'express' );
let category = require( '../features/category/category.router' )
let item = require( '../features/items/item.router' )
module.exports = function ( app ) {
    let router = express.Router();
    //e.g use user routes at /api/users
    router.use( '/category', category );
    router.use( '/item', item )
    app.use( '/api', router );
};