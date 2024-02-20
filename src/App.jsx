import Cards from './assets/components/cards'
import './App.css'
import { data } from './assets/items'
import 'bootstrap'








function App() {
  
 
  
  

 
   

  return (
    <>
 

       <header>
       <h1>Market</h1>
       </header>
        
        <div className="filters">
        <input type="number" placeholder='enter minimal prise '
        
        />
        <input type="number" placeholder='enter maxsimal prise '
      
        />
         <select class="form-select" aria-label="Default select example"  
       
         >
            <option selected>select brend</option>
            <option value="1">Samsung</option>
            <option value="2">Apple</option>
            <option value="3">Huawei</option>
            <option value="4">OPPO</option>
                      </select>
          <button >Save</button>

      </div>
       

   <div className="card-wrapper">
     {
      data.products.map((el,index)  => {
      return <Cards key={index} thumbnail={el.thumbnail} title={el.title} description={el.description} price={el.price} brand={el.brand} category={el.category} id={el.id} ></Cards>
      })
     }


<button class="btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button className='close'>close</button>
  </form>
</dialog>
   </div>
    </>
  )
} 

export default App


