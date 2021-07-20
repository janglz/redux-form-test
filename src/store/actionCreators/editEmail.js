import { EDIT_EMAIL } from '../actions/actionTypes'

export default function editEmail(email) {
    return {
        type: EDIT_EMAIL,
        email
    }
}