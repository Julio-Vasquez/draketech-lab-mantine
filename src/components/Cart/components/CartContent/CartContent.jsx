import propTypes from 'prop-types'
import { Loader } from '@mantine/core'

import RenderItem from './../RenderItem'

import { countDuplicateItems } from './../../../../utils/arrayFunctions'

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
        if (idProductCar === product.id) {
          const quantity = countDuplicateItems(idProductsCar, product.id)
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
