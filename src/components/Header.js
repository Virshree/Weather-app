import './header.css';

import React, { useState } from 'react'
import Product from './Product';

function Header({ counter }) {
  
  const [title, setTitle] = useState('');
  return (
    <div>
        <div className="navbar">
            <h3>My Store</h3>
          
          <button className='btn btn-primary mx-5'><i class="bi bi-cart"></i>Cart {counter}</button>
        </div>
      <div className='search-bar'>
        <div className="input-group ">
            <div className="form-outline w-25" >
            <input type="search" id="form1" className="form-control"
              placeholder='search by brand or title'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
             
            </div >
                <button type="button" className="btn btn-primary">
                <span className='cart'><i class="bi bi-search"></i></span>
                </button>
            </div>
        
      </div>
      <Product title={title } />
    </div>
  )
}

export default Header

