import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { InitFirestore } from './firebase/config'
import './index.css'

InitFirestore ()
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
