import { addCategory } from './category.service'
exports.addCategory = async ( req, res ) => {
    const { title } = req.body
    let fields = {
        title
    }
    const { err, category } = await addCategory( fields )
    if ( category ) {
        return res.status( 200 ).json( {
            message: "Category succefullt added!",
            category
        } )
    }
    return res.status( 400 ).json( {
        success: false,
        message: "Some thing went wrong while creating category"
    } )
}