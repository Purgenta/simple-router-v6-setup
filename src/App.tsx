
import { Routes,Route, NavLink } from 'react-router'
import './App.css'
import ProductRoute from './pages/products'
import ProductDetails from './pages/products/tabs/details'
import ProductOverview from './pages/products/tabs/overview'
function App() {


  return <>
  <NavLink to="product/123/overview">To product overview</NavLink>
  <Routes>
    <Route path='product' >
      <Route path=':productId' element={<ProductRoute/>}>
    
      </Route>
    </Route>
  </Routes>
  </>
}

export default App
