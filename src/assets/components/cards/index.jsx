import React from 'react'
import './index.css'
// import  {data } from '../../items'





function Cards(props) {
 const {thumbnail, title, price, description,  brand, category}=props;
  return (
    <>
     




  
<div className="cards">
             
              <img width="280" src={thumbnail} alt="" />
               <div className="text">
               <h2>Name: {title} </h2>
                <h3>Description: {description}</h3>
                <h3>Price: ${price}</h3>
                <h3>Brand: {brand}</h3>
                <h3>Category: {category}</h3>
                
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>batafsil</button>
<dialog id="my_modal_2" className="modal">
<img width="280" src={thumbnail} alt="" />
<h2>Name: {title} </h2>
                <h3>Description: {description}</h3>
                <h3>Price: ${price}</h3>
                <h3>Brand: {brand}</h3>
                <h3>Category: {category}</h3>
  <form method="dialog" className="modal-backdrop">
    <button className='close-button'>close</button>
  </form>
</dialog>
               </div>
              </div>
 
             
    
    </>
   
  )
}

export default Cards