import initialState from '../initialState'

export default function loader(state = true, action) {
    switch (action.type) {
    case 'SHOW_LOADER':
        return action.isLoading
        
    default:
        return state
    }
}