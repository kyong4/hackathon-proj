import { useState } from 'react'
import reactLogo from './assets/react.svg'
import selfie from "./selfie.jpg";
import './App.css'

//This app will first ask user to set medical records, allergies, and reminder.
//Then display Medical records, allergies, and reminder as a Navbar
//multiple records/allergies are saved in an array or a linked list to be printed later.
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
       
          <img 
          src={selfie}
           alt="selfie"
           style= {{ width:700}} />
        
      </div>
      <h1>Welcome to Health Tracker. Please answer the following questions.</h1>
      
      <q>Do you have any medical conditions?</q> 
      <li>Do you have any allergies?</li>
      <li>Would you like to set a reminder?</li>
      
{/* after a new user answers the initial questions, they will be redirected to the default homepage */}
{/* the homepage will be a Navbar with medical conditions, allergies, reminder, that will print the array/list of records/allergies when clicked. */}
      <ul>
    {  <li> medical conditions</li> }
      <li> allergies</li>
      <li>reminder</li>
      </ul>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
