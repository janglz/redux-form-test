import imgSuccess from '../img/payment-success.png'
import imgError from '../img/payment-error.png'
import addIcon from '../img/icon-add.svg'
import { useContext, useCallback, useEffect, useState, isValidElement } from 'react';
import FormContext from './FormContext'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../store/actionCreators/actionCreators.js';
import spinner from '../img/spinner.png';
import iconLock from '../img/lock.png';
import validator from 'validator'

/**
 * тут эмулируем удачную и неудачную оплату
 */
let flag = true;

const fakeFetch = (page) => dispatch => {
    dispatch(actions.showLoader(true));
    setTimeout(() => {
        dispatch(actions.selectPage(page));
        dispatch(actions.showLoader(false));
    }, 2000)
};


function PaymentSuccess() {
    const dispatch = useDispatch();

    const handleSelectPage = useCallback((page) => {
        dispatch(actions.selectPage(page));
    }, [dispatch]);


    return (
        <div>
        <form>
            <p className="label-bold">Successfull payment</p>
            <p className="label">
                Your request has been accepted and will be processed within 24 working hours. We will send you a payment details and all information to your email.
            </p>
            <img src={imgSuccess} alt="success!"/>
            
        </form>
        <button className="btn" onClick={()=>handleSelectPage('form')}>
            Back
        </button>
        </div>
    )
}

function PaymentError() {
    const dispatch = useDispatch();

    const handleSubmitPay = useCallback((e) => {
        e.preventDefault()
        flag = !flag
        const page = flag ? 'paymenterror' : 'paymentsuccess'
        
        dispatch(fakeFetch(page));
    }, [dispatch]);
    const isLoading = useSelector((state)=>state.isLoading)
    const btnText = isLoading ? <img className="spinner" alt="loading..." src={spinner} /> : 'Try to pay again'


    return (
        <div>
        <form>
            <p className="label-bold">Your payment failed</p>
            <p className="label">
                Sorry, but we’ve having trouble processing your payment. You have been not charged for this transaction.
            </p>
            <img src={imgError} alt="Error!"/>
            
        </form>
        <button className="btn error" onClick={handleSubmitPay}>
            {btnText}
        </button>
        </div>
    )
}

/**
 * Главная страница. Cумма на кнопке рассчитывается в зависимости от количества выбранных товаров.
 * Описание товара сохраняется, если количество товаров увеличивается на следующем экране
 * @returns jsx
 * 
 */
function DefaultForm() {
    const context = useContext(FormContext)
    const store = context.getState()
    const products = store.products;
    const i = products.selectedProducts.length - 1;
    const price = products.all.reverse()[i].price

    const isLoading = useSelector((state)=>state.isLoading)

    const [selected, setSelected] = useState(products.selectedProducts);
    const [emailError, setEmailError] = useState(null);

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            setEmailError(emailError)
            setSelected(selected)   
        }, [products, store.errors, emailError]
    )

    const handleSubmitPay = useCallback((e) => {
        e.preventDefault()
        flag = !flag
        const page = flag ? 'paymenterror' : 'paymentsuccess'
        dispatch(fakeFetch(page));
    }, [dispatch]);

    const handleKeywordsChange = (e, id) => {
        e.preventDefault()
        const keywords = e.target.value
        const newSelected = [...selected];
        const i = newSelected.findIndex(el => el.id == id);
        newSelected[i] = keywords;
        setSelected(newSelected)
        dispatch(actions.editProductKeywords({id, keywords}))  
    }

    const handleLinkChange = (e, id) => {
        e.preventDefault()
        const link = e.target.value
        const newSelected = [...selected];
        const i = newSelected.findIndex(el => el.id == id);
        newSelected[i] = link;
        setSelected(newSelected)
        dispatch(actions.editProductLink({id, link}))
    }

    const handleEmailChange = (e) => {
        if (!validator.isEmail(e.target.value)) { 
            setEmailError('Email is invalid')
            dispatch(actions.addError('Email is invalid'))
        } else {
            setEmailError(null)
            dispatch(actions.editEmail(e.target.value))
            dispatch(actions.clearErrors)
        }
    }

    const productsList = products.selectedProducts.map(prod =>{
        return(
            <li key={prod.id}>
                <p className="label-bold">{prod.name} 
                    {products.selectedProducts.length > 1 ?
                    (<button 
                        className="no-border"
                        onClick={(e)=> {
                            e.preventDefault();
                            dispatch(actions.deleteProduct(prod.id))
                            const newSelected = [...selected].filter(el => el.id != prod.id);
                            setSelected(newSelected)
                        }}
                    ><img src={addIcon} className="icon-add-45deg" alt=""/>
                    </button>) : ''
                }
                </p>
                <label>
                    Enter main keyword for the product
                <input 
                    type="text" 
                    placeholder="for example, sylicon wine cup"
                    value={prod.keywords} 
                    onChange={(e) => handleKeywordsChange(e, prod.id)}
                />
                </label>
                <label>
                    Enter link to the similar product as a reference
                <input 
                    type="text" 
                    placeholder="https://..."
                    value={prod.link} 
                    onChange={(e) => handleLinkChange(e, prod.id)}
                />
                </label>
            </li>
        )
    })

    const button = isLoading ? <img className="spinner" src={spinner} alt="loading..."/> : `Submit and Pay ${price} USD`

    return (
        <div>
            <form>
                <h2>Info</h2>
                <label>
                Enter your email address
                    <input 
                        type="email" 
                        placeholder="team@checkforpatent.com" 
                        onChange={handleEmailChange}
                        className={emailError ? 'invalid' : 'valid'}
                    />
                </label>
                    <ul>{productsList}</ul>
                <label>
                <button
                    className="href green"
                    onClick={()=>dispatch(actions.selectPage('add'))}
                >
                    Add more products <img src={addIcon} className="icon-add" alt=""/>
                </button>
                </label>
                <p className="label-promo">We offer discount up to 36% for multiple checks</p>

            </form>
            <button 
                className="btn" 
                onClick={handleSubmitPay}>
                {button}
            </button>
            <p className="secured"><img className="icon" src={iconLock} alt=" " />Secure payment with Stripe</p>
        </div>
    )
}

/**
 *  Выбор количества товаров
 * 
 * @returns jsx
 */
function AddProducts () {
    const context = useContext(FormContext)
    const store = context.getState()
    const products = store.products;
    const dispatch = useDispatch();
    const [ currentIndex='5', setCurrentIndex ] = useState(); 

    useEffect(
        ()=>{
            handleSelectProducts(currentIndex)
            dispatch(actions.selectProduct(currentIndex-1))
        }, [currentIndex, products]
    )

    const handleAddProducts = useCallback(() => {
        dispatch(actions.selectPage('form'))
    }, [dispatch]);

    const handleSelectProducts = useCallback(async (amount) => {
        const newProducts = []

        for (let i = 0; i < amount; i++) {
            const prod = store.products.selectedProducts[i]
            const keywords = prod? prod.keywords : '' ;
            const link = prod ? prod.link : '' ;
            const newProduct = {
                id: `${i + 1}`,
                name: `Product ${i + 1}`,
                keywords: keywords,
                link: link, 
            }
            newProducts.push(newProduct)
        };

        dispatch(actions.addProduct(newProducts))
        dispatch(actions.selectProduct(amount - 1))
        setCurrentIndex(amount);
    }, [dispatch]);
  
    const mapped = [...products.all].reverse().map((prod, i) => {
        return (
            <li className={prod.selected ? 'active': ''} key={prod.pcs} onClick={() => handleSelectProducts(prod.pcs)}>
                <input 
                    type="radio" 
                    checked={prod.selected} 
                    onChange={() => handleSelectProducts(prod.pcs)}
                />
                <p className="list-bold">{prod.name}</p>
                {prod.desc && <p className={`list-description ${prod.selected? ' active' : ''}`}>{prod.desc}</p>}
            </li>
        )
    })

    return (
        <div>
            <form>
                <h2 className="label-bold">Adding more products</h2>
                <p className="label">The more items you check, the better the price.</p>
                <ul className="form-list">
                    {mapped}
                </ul>
            </form>
            <button className="btn" onClick={handleAddProducts}>
                Continue
            </button>
        </div>
    )
}

export { PaymentSuccess, PaymentError, DefaultForm, AddProducts }