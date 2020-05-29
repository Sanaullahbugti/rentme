let express = require( "express" );
let router = express.Router();
import { addCategoryValidation } from './category.validation'
import { addCategory } from './category.controller'
router.route( '/addCategory' ).post( addCategoryValidation, addCategory )