import propTypes from 'prop-types'

import RenderItem from './../RenderItem'

import { countDuplicateItems } from './../../../../utils/arrayFunctions'
import { Loader } from '@mantine/core'

const CartContent = ({
  products,
  idProductsCar,
  idProductCar,
  increaseQuantity,
  decreaseQuantity,
}) => {
  if (!products) return <Loader />

  return (
    <div>
      {products.map((product, key) => {
        if (idProductCar === product.model) {
          const quantity = countDuplicateItems(idProductsCar, product.model)
          return (
            <RenderItem
              key={key}
              product={product}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          )
        }
      })}
    </div>
  )
}

CartContent.propTypes = {
  products: propTypes.array,
  idProductsCar: propTypes.array.isRequired,
  idProductCar: propTypes.string.isRequired,
  increaseQuantity: propTypes.func.isRequired,
  decreaseQuantity: propTypes.func.isRequired,
}

export default CartContent
