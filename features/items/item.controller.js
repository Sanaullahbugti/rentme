let catService = require( '../category/category.service' )
let service = require( './item.service' )
const { ObjectId } = require( 'mongodb' );
exports.addItemToCategory = async ( req, res ) => {
    console.log( "add category===>", req.body )
    const { title, categry, avatarUrl, rentPerDay, description, } = req.body
    let fields = {
        title, categry, picture:avatarUrl, rentPerDay, description,
    }
    const query = { _id: ObjectId( categry ) }
    const { err, categories: categryData } = await catService.getAllCategories( query )
    console.log(err,categryData)
    if ( categryData ) {
        const { err, item } = await service.addItemToCategory( fields )
        if ( item ) {
            console.log( "Item===>", item )
            const fields = { $addToSet: { items: ObjectId( item._id ) } }
            const { err: error, updatedCategory } = await catService.updateCategories( query )
            console.log( "category===>", updatedCategory )
            return res.status( 200 ).json( {
                message: "Item succefullt added!",
                field: fields
            } )
        }
        return res.status( 400 ).json( {
            success: false,
            message: "Some thing went wrong while creating Item"
        } )
    } else {
        return res.status( 400 ).json( {
            success: false,
            message: "Category is not found in which you want to add item!"
        } )
    }

}
