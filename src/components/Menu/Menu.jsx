import React,{useState} from 'react';
import './Menu.css';


function Menu() {
    const[text, setText]= useState(' ')
    function stack(e){
     setText(e.target.value);
    }
     return(
         <div className='container'>
             <h1>Selected: {text}</h1>
             <select onChange={(e) => stack(e)}>
                 <option value='Bacon'>Bacon</option>
                 <option value='Tuna'>Tuna</option>
                 <option value='Tuna pants'>Tuna pants</option>
             </select>
         </div>
     )
 }
export default Menu