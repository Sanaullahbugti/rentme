let service = require( './category.service' )
exports.addCategory = async ( req, res ) => {
    console.log( "add category===>", req.body )
    const { title } = req.body
    let fields = {
        title
    }
    const { err, category } = await service.addCategory( fields )
    if ( category ) {
        return res.status( 200 ).json( {
            message: "Category succefullt added!",
            field: fields
        } )
    }
    return res.status( 400 ).json( {
        success: false,
        message: "Some thing went wrong while creating category"
    } )
}

exports.getAllcategories = async ( req, res ) => {
    const { err, categories } = await service.getAllCategories();
    if ( categories ) {
        return res.status( 200 ).json( {
            success: true,
            categories
        } )
    }
    return res.status( 400 ).json( {
        success: false,
        message: "Some thing went wrong while retrieving data!"
    } )
}