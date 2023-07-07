import React ,{useContext}from 'react'
import { CartContext } from './Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const Items=({id,description,title,img,price,quantity}) =>{
    const { removeItem, increment, decrement } = useContext(CartContext);
    return (
    <div>
    <div className='items-info'>
    <div className='product-img'>
    <img src= {img}/>,
    </div>
    <div className='title'>
    <h2>{title}</h2>
    <p>{description}</p>
    </div>
    <div className='add-minus-quantity'>
    <FontAwesomeIcon icon={faMinus} onClick={() => decrement(id)}/>
    <input type="text" placeholder={quantity} disabled />
    <FontAwesomeIcon icon={faPlus} onClick={() => increment(id)}/>
    </div>
    <div className='price'>
    <h3>{price}Rs</h3>
    </div>
    <div className='remove-item'>
    <FontAwesomeIcon icon={faTrash} onClick={() => removeItem(id)}/>
    </div>
    </div>
    <hr />
 
    
    </div>
  )
}

export default Items
