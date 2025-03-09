import React from 'react'
import history from '../../../../utils'

const ProductOverview = (): JSX => {
  return (
    <div>ProductOverview    <button type='button' onClick={() => history.push("root")}>Lets go on route</button></div>
  )
}

export default ProductOverview