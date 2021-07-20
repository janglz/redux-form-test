import { ADD_ERROR } from '../actions/actionTypes'

export default function addError(error) {
    return {
        type: ADD_ERROR,
        error
    }
}