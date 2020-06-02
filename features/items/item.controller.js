let catService = require( '../category/category.service/' )
let service = require( './item.service' )

const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;
exports.addItemToCategory = async ( req, res ) => {
    console.log( "add category===>", req.body )
    const { title, categry, avatarUrl, price, description, } = req.body
    let fields = {
        title, categry, avatarUrl, price, description,
    }
    const query = { _id: ObjectId( categry ) }
    const { err, categries: categryData } = await catService.getAllCategories( query )
    if ( categryData ) {
        const { err, item } = await service.addItemToCategory( fields )
        if ( item ) {
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
