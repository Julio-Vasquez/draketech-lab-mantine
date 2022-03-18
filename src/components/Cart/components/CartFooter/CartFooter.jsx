import propTypes from 'prop-types'
import { Button } from '@mantine/core'

import { cart_content__footer } from './CartFooter.module.scss'

const CartFooter = ({ total }) => {
  return (
    <div className={cart_content__footer}>
      <div>
        <p>Total aproximado: </p>
        <p id="tf">$ {total.toFixed(2)}</p>
      </div>
      <Button color="orange">Tramitar pedido</Button>
    </div>
  )
}

CartFooter.propTypes = {
  total: propTypes.number.isRequired,
}
export default CartFooter
