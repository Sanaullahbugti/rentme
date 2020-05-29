import To from 'await-to-js'
import { Category } from './category.model'
exports.addCategory = async ( fields ) => {
    const newCategory = Category( fields )
    const [err, category] = await To( newCategory.save() )
    return { err, category }
}