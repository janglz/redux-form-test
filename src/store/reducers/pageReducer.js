

export default function page(state = 'form', action) {
    switch (action.type) {
    case 'SELECT_PAGE':
        return action.page
    default:
        return state
    }
}