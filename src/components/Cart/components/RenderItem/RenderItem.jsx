import propTypes from 'prop-types'
import { Button } from '@mantine/core'

const RenderItem = ({
  product: { id, name, price, image },
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="cart-content__product">
      <img src={`kjhsdfjsdhfsd/${image}`} alt={name} />
      <div className="cart-content__product-info">
        <div>
          <h3>title: {name}</h3>
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
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  }).isRequired,
  quantity: propTypes.number,
  increaseQuantity: propTypes.func.isRequired,
  decreaseQuantity: propTypes.func.isRequired,
}

export default RenderItem
