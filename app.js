const express = require( "express" );
const path = require( "path" );
const bodyParser = require( "body-parser" );
const expressValidator = require( "express-validator" );
const { errors } = require( 'celebrate' )
const cors = require( "cors" );
const database = require( './db/db' )
const app = express();
database.connect()
app.use( cors() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
// app.use( expressValidator() );
app.use( express.static( path.join( __dirname, "public" ) ) );


//Requiring routes
require( "./routers/router" )( app );
app.use( errors() );

// catch 404 and forward to error handler
app.use( function ( req, res, next ) {
    const err = new Error( "Not Found" );
    err.status = 404;
    next( err );
} );
const port = process.env.NODE_ENV === 'production' ? ( process.env.PORT || 80 ) : 4000;

console.log( "props===>", process.env.NODE_ENV )
app.listen( port, () => {
    console.log( `Server running on port ${ port }` )
} )
module.exports = app
