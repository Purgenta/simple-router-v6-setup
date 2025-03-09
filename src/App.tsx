
import { Routes,Route } from 'react-router'
import './App.css'
import ProductRoute from './pages/products'
import history from './utils'
function App() {


  return <>
  <button onClick={() => history.push('/product/123/overview')}> on route overview</button>
  <Routes>
    <Route path='product' >
      <Route path=':productId/*' element={<ProductRoute/>}>
      </Route>
    </Route>
  </Routes>
  </>
}

export default App
