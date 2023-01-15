//there are 5 important statement needed in index.js
//------------------------------------------------------
//1 Import the react and react dom libraries
import React from 'react';                      //library that defines what a component is and how multiple components work together
import ReactDOM from 'react-dom/client';        //library that does the work of showing the component to show up in browser
import { checkPropTypes } from 'prop-types';
import App from './App'

//2 Get a reference to the div with the ID root
const el=document.getElementById('root');
//3tell React to take control of that element
const root=ReactDOM.createRoot(el);
//4 create a component(this process is removed and is added in separate file)
// function App(){
//     const name='Mankrit';
//     const maxval=10;  
//     return (
//         <div>
//             <h1>Cool Project Incoming by {name}</h1>
//             <h1>{new Date().toLocaleTimeString()}</h1> {/*we all use expression directly*/}
//             {/*Now we will use checkPropTypes.Props are what attributes are in HTML */}
//             <input type="number" min={5} max={maxval}/>
//         </div>

//     );
//}

//5 show the component on the screen
root.render(<App />);