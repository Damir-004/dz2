import React from 'react';
import './App.css';
import ShowHide from './components/ShowHide/ShowHide';
import Menu from './components/Menu/Menu';
import Mathematics from './components/Mathematics/Mathematics';
const App = ()=>{
    

    return(
        <div>
            <div>
                <ShowHide/>
            </div>
            <div>
                <Menu/>
            </div>
            <div>
                <Mathematics/>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default App