import { SELECT_PAGE } from '../actions/actionTypes'

export default function selectPage(page) {
    return {
        type: SELECT_PAGE,
        page
    }
}