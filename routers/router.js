let express = require( 'express' );
let category = require( '../features/category/category.router' )
const user = require('../api/user')

module.exports = function ( app ) {
    let router = express.Router();
    //e.g use user routes at /api/users
    router.use( '/user', user );
    router.use( '/category', category );
    app.use( '/api', router );
};