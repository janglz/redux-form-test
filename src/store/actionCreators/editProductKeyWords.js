import { EDIT_PRODUCT_KEYWORDS } from '../actions/actionTypes'

export default function editProductKeywords({id, keywords}) {
    return {
        type: EDIT_PRODUCT_KEYWORDS,
        id, 
        keywords,
    }
}