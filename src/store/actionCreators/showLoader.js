import { SHOW_LOADER } from '../actions/actionTypes'

export default function showLoader(isLoading) {
    return {
        type: SHOW_LOADER,
        isLoading
    }
}

