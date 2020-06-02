const to = require( 'await-to-js' ).default;
let Item = require( './items.model' )
exports.addItemToCategory = async ( fields ) => {
    const newItem = Item( fields )
    const [err, item] = await to( newItem.save() )
    console.log( err, item );
    return { err, item }
}