import { BrowserRouter, Route, Routes } from 'react-router-dom';


import NavBar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListCointainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';
import { CartContextProvider } from './context/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <div className="App">
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>

            <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element={<CartContainer/>}/>
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
