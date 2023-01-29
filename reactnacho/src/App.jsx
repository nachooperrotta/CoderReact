import { useState } from 'react'

import Barra from './componentes/Navbar/Barranav'
import ItemListContainer from './componentes/ItemListCointainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <div className="App">
      <>
      <Barra/>
      <ItemListContainer greeting ="Hola"/>
      </>
    </div>
  )
}

export default App
