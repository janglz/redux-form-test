import { CLEAR_ERRORS } from '../actions/actionTypes'

export default function clearErrors() {
    return {
        type: CLEAR_ERRORS,
    }
}