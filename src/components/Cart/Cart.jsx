import propTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Grid, Loader } from '@mantine/core'

import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import RenderItem from './components/RenderItem'

import {
  countDuplicateItems,
  removeItem,
  removeDuplicateItems,
} from '../../utils/arrayFunctions'

const Cart = ({ productCar, getProductsCar, products }) => {
  const STORAGE_PRODUCTS_EC = ''
  const [carOpen, setCarOpen] = useState(false)
  const widthCartContent = carOpen ? 400 : 0
  const [singelProductsCart, setSingelProductsCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const allProductsId = removeDuplicateItems(productCar)
    setSingelProductsCart(allProductsId)
  }, [productCar])

  useEffect(() => {
    const productData = []
    let totalPriceTemp = 0
    const allProductsId = removeDuplicateItems(productCar)
    allProductsId.forEach(productId => {
      productData.push({
        id: productId,
        quantity: countDuplicateItems(productCar, parseInt(productId)),
      })
    })
    if (!products.loading && products.result) {
      products.result.forEach(product => {
        productData.forEach(item => {
          if (product.id === parseInt(item.id)) {
            totalPriceTemp += product.price * item.quantity
          }
        })
      })
    }
    setTotalPrice(totalPriceTemp)
  }, [productCar, products])

  const openCar = () => {
    setCarOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeCar = () => {
    setCarOpen(false)
    document.body.style.overflow = 'scroll'
  }

  const emptyCar = () => {
    localStorage.removeItem(STORAGE_PRODUCTS_EC)
    getProductsCar()
  }

  const increaseQuantity = id => {
    const arrayItemsCar = productCar
    arrayItemsCar.push(id)
    localStorage.setItem(STORAGE_PRODUCTS_EC, arrayItemsCar)
    getProductsCar()
  }

  const decreaseQuantity = id => {
    const result = removeItem(productCar, id.toString())
    localStorage.setItem(STORAGE_PRODUCTS_EC, result)
    getProductsCar()
  }

  return (
    <div className="car-content" style={{ width: widthCartContent }}>
      <div>
        <CartHeader closeCar={closeCar} emptyCar={emptyCar} />
        <div className="cart-content__products">
          {singelProductsCart.map((item, key) => (
            <RenderItem
              key={key}
              products={products}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
        </div>
        <CartFooter total={total} />
      </div>
    </div>
  )
}

Cart.propTypes = {
  productCar: propTypes.any.isRequired,
  getProductsCar: propTypes.func.isRequired,
  products: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    image: propTypes.string.isRequired,
  }),
}

export default Cart
