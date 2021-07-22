import { productsList } from '../../productsList'

const formatLink = (link) => {
    let res = link;
    if (/(http:\/\/|www\.|https:\/\/)/i.test(res)) return res.trim() 
    if (!/(http:\/\/|www\.|https:\/\/)/i.test(res)) {
        return 'https://' 
    }
    return res.trim()
}

const initialState = {
    all: productsList,
    selectedProducts: [
        {
            id: '1', 
            keyword: '',
            link: '',
        },
    ],
}

export default function products(state = initialState, action) {
    let i;
    const newArr = [...state.selectedProducts]
    switch (action.type) {
    case 'SELECT_PRODUCT':
        //action.selected <T> number
        //ok
        const all = [...state.all].map((prod, i) => {
            prod.selected = i === action.selected ? true : false;
            return prod
        })
        return {
            ...state,
            all: all
        }
    case 'ADD_PRODUCT':
        //action.product <T> array of objects
        //ok
        const newState = { ...state }
        newState.selectedProducts = [ ...action.product ]
        return newState;

    case 'EDIT_PRODUCT_KEYWORDS': 
        //action: {id, keywords} <T> object
        // ok
        i = state.selectedProducts.findIndex(el => el.id == action.id);
        newArr[i].keywords = action.keywords;
        return {
            ...state,
            selectedProducts: newArr,
        }
    case 'EDIT_PRODUCT_LINK': 
        //action: {id, link} <T> object
        //how to validate this?
        i = state.selectedProducts.findIndex(el => el.id == action.id);
        
        const link = formatLink(action.link);
        newArr[i].link = link;
        return {
            ...state,
            selectedProducts: newArr,
        }
    
    case 'DELETE_PRODUCT':
        //action: id <T> string
        console.log(newArr)
        return {
            ...state,
            selectedProducts: newArr.filter(el => el.id != action.id),
            //TODO: сделать стравнение строгим
        }
    default:
        return state
    }
}