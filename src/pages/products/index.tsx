import React from 'react'
import { Route, Routes } from 'react-router'
import ProductOverview from './tabs/overview'
import ProductDetails from './tabs/details'


// dumbed down idea of potential tabs implementation
const ProductRoute = () => 


  <Routes>
    <Route path='overview' element={<ProductOverview/>}/>
    <Route path='details' element={<ProductDetails/>}/>
  </Routes>


export default ProductRoute