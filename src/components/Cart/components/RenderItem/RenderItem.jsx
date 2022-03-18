import propTypes from 'prop-types'
import { Button } from '@mantine/core'

import styles from './styles.module.scss'

const RenderItem = ({
  product: { model, image, price, title },
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  console.log(product)
  return (
    <div className={styles.cart_content__product}>
      <img src={`kjhsdfjsdhfsd/${image}`} alt={title} />
      <div className={styles.cart_content__product_info}>
        <div>
          <h3>title: {title}</h3>
          <p>Price: $ {price}</p>
        </div>
        <div>
          <p>En carrito: {quantity} ud</p>
          <div>
            <Button size="sm" onClick={() => decreaseQuantity(id)}>
              -
            </Button>
            <Button size="sm" onClick={() => increaseQuantity(id)}>
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
RenderItem.propTypes = {
  product: propTypes.shape({
    model: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  }).isRequired,
  quantity: propTypes.number,
  increaseQuantity: propTypes.func.isRequired,
  decreaseQuantity: propTypes.func.isRequired,
}

export default RenderItem
