import './App.css'
import Modal from './components/Modal'
import { useState } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <button onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
      {showModal && <Modal />} {/* renders when showModal is true */}
    </div>
  )
}

export default App
