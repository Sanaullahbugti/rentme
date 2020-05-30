
let mongoose = require( 'mongoose' )
exports.connect = function () {
    mongoose.connect("mongodb://127.0.0.1:27017/rent-me");
    let db = mongoose.connection;
    db.on( 'error', console.error.bind( console, 'connection error:' ) );
    db.once( 'open', function () {
        // we're connected!
        console.log( "MongoDB connected on mongodb://127.0.0.1:27017/rent-me" );
        console.log( "###########################################################################" );
    } );
};