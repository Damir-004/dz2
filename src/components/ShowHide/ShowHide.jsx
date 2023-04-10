import React,{useState} from 'react';
import './ShowHide.css';

const ShowHide = ()=>{
    const [text, setText] = useState("Hello")
    const [show, setShow] = useState(true)
    function changeText(event){
        setText(event.target.value)
    }

    return(
        <div className='box'>
            <div className='box-btn'>
                <button onClick={()=>setShow(true)}>Show</button>
                <button onClick={()=>setShow(false)}>Hide</button>
            </div>
            <p>An input field!</p>
            {show && <input type="text" onChange={changeText} value={text}/>}
        </div>
    )
}
export default ShowHide;