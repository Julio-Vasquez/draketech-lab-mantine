import propTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Button } from '@mantine/core'

import CartEmpty from './../../assets/img/svg/cart-empty.svg'
import CartFull from './../../assets/img/svg/cart-full.svg'

import CartHeader from './components/CartHeader'
import CartContent from './components/CartContent'
import CartFooter from './components/CartFooter'

import { STORAGE_PRODUCTS_EC } from './../../common/config'
import {
  countDuplicateItems,
  removeDuplicateItems,
  removeItem,
} from './../../utils/arrayFunctions'

import styles from './styles.module.scss'

const Cart = ({ getProductsCar, products, productCart }) => {
  const [carOpen, setCarOpen] = useState(false)
  const widthCartContent = carOpen ? 400 : 0
  const [singelProductsCart, setSingelProductsCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const allProductsId = removeDuplicateItems(productCart)
    setSingelProductsCart(allProductsId)
  }, [productCart])

  useEffect(() => {
    const productData = []
    let totalPriceTemp = 0
    const allProductsId = removeDuplicateItems(productCart)

    allProductsId.forEach(productId => {
      productData.push({
        id: productId,
        quantity: countDuplicateItems(productCart, productId),
      })
    })

    if (products) {
      products.forEach(product => {
        productData.forEach(item => {
          if (product.model === item.id) {
            totalPriceTemp += product.price * item.quantity
          }
        })
      })
    }
    setTotalPrice(totalPriceTemp)
  }, [productCart, products])

  const openCar = () => {
    setCarOpen(!carOpen)
  }

  const closeCar = () => {
    setCarOpen(false)
  }

  const emptyCar = () => {
    localStorage.removeItem(STORAGE_PRODUCTS_EC)
    getProductsCar()
  }

  const increaseQuantity = id => {
    const arrayItemsCar = productCart
    arrayItemsCar.push(id)
    localStorage.setItem(STORAGE_PRODUCTS_EC, arrayItemsCar)
    getProductsCar()
  }

  const decreaseQuantity = id => {
    const result = removeItem(productCart, id)
    localStorage.setItem(STORAGE_PRODUCTS_EC, result)
    getProductsCar()
  }

  return (
    <div style={{ bottom: 0 }}>
      <Button variant="link" className={styles.car} onClick={openCar}>
        {productCart.length > 0 ? (
          <img src={CartFull} height={30} />
        ) : (
          <img src={CartEmpty} height={30} />
        )}
      </Button>
      <div className={styles.cart_content} style={{ width: widthCartContent }}>
        <CartHeader closeCart={closeCar} emptyCart={emptyCar} />
        <div className={styles.cartc_ontent__products}>
          {singelProductsCart.map((item, key) => (
            <CartContent
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              products={products}
              key={key}
              idProductsCar={productCart}
              idProductCar={item}
            />
          ))}
        </div>
        <CartFooter total={totalPrice} />
      </div>
    </div>
  )
}

Cart.propTypes = {
  getProductsCar: propTypes.func.isRequired,
  products: propTypes.array.isRequired,
  productCart: propTypes.array.isRequired,
}

export default Cart
