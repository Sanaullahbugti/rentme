const to = require( 'await-to-js' ).default;
let Category = require( './category.model' )
exports.addCategory = async ( fields ) => {
    const newCategory = Category( fields )
    const [err, category] = await to( newCategory.save() )
    console.log( err, category );
    return { err, category }
}

exports.getAllCategories = async ( query ) => {
    const [err, categories] = await to( Category.find( query ) )
    return { err, categories }
}

exports.updateCategories = async ( query, fields ) => {
    const [err, updatedCategory] = await to( Category.update( query, fields ) )
    return { err, updatedCategory }
}