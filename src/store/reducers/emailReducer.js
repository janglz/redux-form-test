import initialState from '../initialState'

export default function email(email = initialState.email, action) {
    switch (action.type) {
    case 'EDIT_EMAIL':
        // console.log(action.email)
        return action.email
        
    default:
        return email
    }
}