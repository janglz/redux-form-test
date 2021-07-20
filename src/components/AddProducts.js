import { useContext } from 'react';
import store from '../store/store'

const products = []



function AddProducts () {
    const mapped = products.reverse().map(prod=>{
        <li key={prod.pcs}>
           <p className="list-bold">{prod.name}</p>
           {prod.desc && <p className="list-">{prod.desc}</p>}
        </li>
    })

    return (
        <div>
        <p className="label-bold">Adding more products</p>
        <p className="label">The more items you check, the better the price.</p>
        <ul className="form-list">
            {mapped}
        </ul>
        </div>
    )
}