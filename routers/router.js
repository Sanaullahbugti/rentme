let express = require( 'express' );
import category from '../category/category.router'
module.exports = function ( app ) {
    let router = express.Router();
    //e.g use user routes at /api/users
    router.use( '/category', category );
    app.use( '/api', router );
};