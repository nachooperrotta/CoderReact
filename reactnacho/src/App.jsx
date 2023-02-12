import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Barra from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListCointainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cartwidget from './componentes/Cartwidget/Cartwidget';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Barra/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/Cartwidget' element={<Cartwidget/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
