import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Barra from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListCointainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cartwidget from './componentes/Cartwidget/Cartwidget';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { CartContextProvider } from './context/CartContext';


function App() {

  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <Barra/>
        <div className="App">
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>

            <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
            <Route path='/Cartwidget' element={<Cartwidget/>}/>
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
