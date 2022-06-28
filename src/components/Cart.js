import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Cart() {
    
    const [product,setProduct]=useState([]);
    const[count,setCount]=useState(0);

    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData(){
        const {data} =await axios.get(`http://localhost:8000/products/${id}`);
       console.log(data);
       setProduct(data);
       console.log(product);
    }
  return (
    <div>
                    <div className="card" style={{ width: '20vw',margin:"auto"}} >
                        <img className="card-img-top" src={product.p_image} alt="Card image cap"
                        width='200px' height='200px'
                        />
                        <div className="card-body">
                            <h3 className="card-title">{product.brand}</h3>
                            <h5>{product.product_title}</h5>

                            <p>{count <= product.stock  ? (<span style={{color:'green'}}>Available</span>):(<span style={{color:'red'}}>Out of Stock</span>)}</p>
                            <p>Hurry Up! Only {product.stock-count<0 ? ('0'):(product.stock-count)}  Left</p>
                            <div className='quantity d-flex justify-content-between align-items-center mt-5' style={{ color: 'black', width: 150, height: 30 }}>
                                            <span className='rounded-circle'
                                                style={{
                                                    fontSize: '24px', backgroundColor: 'lightgrey', color: 'black',
                                                    height: '2rem', width: '2rem', cursor: 'pointer',display:"flex",alignItems:'center',justifyContent:'center'
                                                }}
                                                onClick={()=>setCount(count-1)}
                                            >-</span>
                                            <span>{count}</span>
                                            <span className='rounded-circle'
                                                style={{
                                                    fontSize: '24px', backgroundColor: 'lightgrey', color: 'black',
                                                    height: '2rem', width: '2rem', cursor: 'pointer',alignItems:"center",display:"flex",justifyContent:"center"
                                                }}
                                                onClick={()=>setCount(count+1)}
                                               
                                            >+</span>
                                </div>

                        </div>
                         <button className='btn btn-primary' onClick={()=>navigate('/')}>Go back</button>
                </div>
       
    </div>
  )
}

export default Cart

