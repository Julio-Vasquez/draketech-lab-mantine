import { useEffect, useState } from 'react'
import { Grid } from '@mantine/core'
import { ToastContainer, toast } from 'react-toastify'

import Cart from '../components/Cart'
import Layout from '../components/Layout'
import CardItem from '../components/CardItem'

import { getData } from '../services/bikesServices'
import { STORAGE_PRODUCTS_EC } from './../common/config'

const { Col } = Grid
const App = () => {
  const [bikes, setBikes] = useState([])

  const [productCart, setProductCart] = useState([])

  useEffect(() => {
    getData().then(setBikes)
  }, [getData])

  const addProductCar = (id, name) => {
    console.log(`Has agregado el producto : ${name} con el id : ${id}`)
    //obtengo los productos actuales
    const arrayProducts = bikes
    //incluyo el nuevo producto
    arrayProducts.push(id)
    //actualizo el estado
    setProductCart(arrayProducts)
    //almaceno en el localStorage el nuevo carro
    localStorage.setItem(STORAGE_PRODUCTS_EC, bikes)
    getProductsCar()

    toast.success(`🚀 ${name} añadido al carrito correctamente.`)
    //getProductsCar();
  }

  const getProductsCar = () => {
    const arrayProducts = localStorage.getItem(STORAGE_PRODUCTS_EC)
    //ceparo el string si existe
    if (arrayProducts) setProductCart(arrayProducts.split(','))
    else setProductCart([])
  }

  return (
    <Layout>
      <div>
        <Cart
          getProductsCar={getProductsCar}
          products={bikes}
          productCart={productCart}
        />
        <Grid columns={24}>
          {bikes.map((item, key) => (
            <Col xs={24} sm={12} md={8} lg={6} key={key}>
              <CardItem
                addCart={addProductCar}
                text={`Price of this bike is : ${item.price} USD`}
                title={item?.model}
                image={item?.imageBicycle || item?.image}
              />
            </Col>
          ))}
        </Grid>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover={false}
        />
      </div>
    </Layout>
  )
}

export default App