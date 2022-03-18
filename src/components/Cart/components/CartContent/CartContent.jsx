import propTypes from 'prop-types'

import RenderItem from './../RenderItem'

import { countDuplicateItems } from './../../../../utils/arrayFunctions'
import { Loader } from '@mantine/core'

const CartContent = ({
  products: { loading, result },
  idProductsCar,
  idProductCar,
  increaseQuantity,
  decreaseQuantity,
}) => {
  if (loading || !result) return <Loader />

  return result.map((product, key) => {
    if (idProductCar === product.id) {
      const quantity = countDuplicateItems(idProductsCar, product.id)
      return (
        <RenderProduct
          key={key}
          product={product}
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )
    }
  })
}

CartContent.propTypes = {
  products: propTypes.array,
  idProductsCar: propTypes.array.isRequired,
  idProductCar: propTypes.number.isRequired,
  increaseQuantity: propTypes.func.isRequired,
  decreaseQuantity: propTypes.func.isRequired,
}

export default CartContent
