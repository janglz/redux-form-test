import initialState from '../initialState'

export default function errors(state = {}, action) {
    switch (action.type) {
    case 'ADD_ERROR':
        return { 
            ...state,
            email: action.error, 
        }
    case 'CLEAR_ERRORS':
        return {}
    default:
        return state
    }
}