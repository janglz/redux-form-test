import { combineReducers } from "redux";
import products from './productsReducer'
import page from './pageReducer'
import errors from './errorsReducer'
import email from './emailReducer.js'
import isLoading from './loaderReducer'

export default combineReducers({
    products,
    page,
    isLoading,
    errors,
    email,
})