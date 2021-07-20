import FormContext from "./FormContext";
import { useContext, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultForm, PaymentError, PaymentSuccess, AddProducts } from './DefaultForm';
import { Provider } from "react-redux";

function Content () {
    // const store = useContext(FormContext);
    
    // // console.log(store.getState())
    
    // const  state  = store.getState()
    const page = useSelector(state => state.page);
    // console.log('page',page)

    switch (page) {
        case 'form':
            return (<DefaultForm />)
        case 'paymenterror':
            return (<PaymentError />)
        case 'paymentsuccess':
            return <PaymentSuccess />
        case 'add':
            return <AddProducts />
        default:
            return <DefaultForm />
    }
}

export default function FormContent () {

    const store = useContext(FormContext);
    
    //  console.log(store.getState())
    
    const  state  = store.getState()
    

    

    // console.log(FormContext)

    return (
        <FormContext.Consumer >
    
         {() => (<Provider store={store}>
            <Content />
         </Provider>)}
         </FormContext.Consumer >
    )
}