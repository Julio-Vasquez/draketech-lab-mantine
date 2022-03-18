import propTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Button } from '@mantine/core'

import CartEmpty from './../../assets/img/svg/cart-empty.svg'
import CartFull from './../../assets/img/svg/cart-full.svg'

import CartHeader from './components/CartHeader'

import { STORAGE_PRODUCTS_EC } from './../../common/config'

import styles from './styles.module.scss'

const Cart = ({ getProductsCar, products, productCart }) => {
  const [carOpen, setCarOpen] = useState(false)

  const openCar = () => {
    setCarOpen(true)
  }

  const closeCar = () => {
    setCarOpen(false)
  }

  const emptyCar = () => {
    localStorage.removeItem(STORAGE_PRODUCTS_EC)
    getProductsCar()
  }

  return (
    <div>
      <Button variant="link" className="car">
        {productCart.length > 0 ? (
          <img src={CartFull} onClick={openCar} height={30} />
        ) : (
          <img src={CartEmpty} onClick={openCar} height={30} />
        )}
      </Button>
      <CartHeader closeCart={closeCar} emptyCart={emptyCar} />
    </div>
  )
}

Cart.propTypes = {
  getProductsCar: propTypes.func.isRequired,
  products: propTypes.array.isRequired,
}

export default Cart
