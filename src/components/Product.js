import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './product.css'

function Product({title}) {
  
  const [list, setList] = useState([]);
  //const [showbtn, setShowBtn] = useState(false);
  
  const navigate=useNavigate();

  function handleClick(id) {
    navigate(`/products/${id}`);

 }
  

  useEffect(() => {
    fetchProducts();
  }, [])
  
  async function fetchProducts() {
    const url = 'http://localhost:8000/products';
    const {data} = await axios.get(url);
    console.log(data);
    setList(data);
  }

 
  const filtered=list.filter((item) => item.brand.toLowerCase().includes(title));
  
  return (
    <div>
      {/*  */}
     
        <div >
            {filtered.length === 0 ? (<h3 className='text-center'>Product Not Found</h3>) : (<div className='product-container'>
              {filtered.map((item, index) => (

                <div className="card" style={{ width: '18vw'}} key={index}>
                        <img src={item.p_image} alt="productImage" width='200px' height='200px' className='card-img-top img-thumbnail'/>
                  <div className="card-body">
                     
              <button className='btn btn-primary' onClick={()=>handleClick(item.id)}>Add to Cart</button>
                        
                  
                         
                          <h5 class="card-title">{item.brand}</h5>
                    
                          <p style={{ fontSize: '16px', fontWeight: 'bolder' }}>
                          {/** final price= intialPrice- (initialPrice*discount)/100 */}
                          ₹{item.list_price - Math.floor((item.list_price * parseInt(item.discount !== '' ? item.discount : 0))) / 100}
                          </p> 
                          <h6 style={{ textDecoration: 'line-through',color:'orange' }}>₹{item.list_price}</h6>
                          <span style={{color:'green'}}>{item.discount !== '' ? item.discount : '0%'}Off</span>
                    
                        </div>
                </div>
                
                ))}
            </div>)
               }
              
          </div>
      </div>
  )
}

export default Product
