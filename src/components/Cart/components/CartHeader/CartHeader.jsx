import propTypes from 'prop-types'
import { Button } from '@mantine/core'

import Close from '../../../../assets/img/svg/close.svg'
import Garbage from '../../../../assets/img/svg/garbage.svg'

const CartHeader = ({ closeCart, emptyCart }) => {
  return (
    <div>
      <div>
        <img src={Close} alt="asdsadasdsad" onClick={closeCart} />
        <h2>Carrito</h2>
      </div>
      <Button variant="subtle" onClick={emptyCart}>
        Vaciar <img src={Garbage} alt="basura" height={30} />
      </Button>
    </div>
  )
}

CartHeader.propTypes = {
  closeCart: propTypes.func.isRequired,
  emptyCart: propTypes.func.isRequired,
}

export default CartHeader
