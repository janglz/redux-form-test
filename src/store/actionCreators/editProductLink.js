import { EDIT_PRODUCT_LINK } from '../actions/actionTypes'

export default function editProductLink({id, link}) {
    return {
        type: EDIT_PRODUCT_LINK,
        id, 
        link
    }
}