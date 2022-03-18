import propTypes from 'prop-types'
import { Button } from '@mantine/core'

import styles from './styles.module.scss'

const RenderItem = ({
  product,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className={styles.cart_content__product}>
      <img src={product?.imageBicycle || product?.image} alt={product.model} />
      <div className={styles.cart_content__product_info}>
        <div>
          <h3>title: {product.model}</h3>
          <p>Price: $ {product.price}</p>
        </div>
        <div>
          <p>En carrito: {quantity} ud</p>
          <div>
            <Button size="sm" onClick={() => decreaseQuantity(product.id)}>
              -
            </Button>
            <Button size="sm" onClick={() => increaseQuantity(product.id)}>
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
RenderItem.propTypes = {
  product: propTypes.any.isRequired,
  quantity: propTypes.number,
  increaseQuantity: propTypes.func.isRequired,
  decreaseQuantity: propTypes.func.isRequired,
}

export default RenderItem
