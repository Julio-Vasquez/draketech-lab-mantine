import { useEffect, useState } from 'react'
import { Grid } from '@mantine/core'
import { ToastContainer, toast } from 'react-toastify'

import Layout from '../components/Layout'
import CardItem from '../components/CardItem'
import Header from '../components/Header'

import { getData } from '../services/bikesServices'
import { STORAGE_PRODUCTS_EC } from './../common/config'
import Footer from '../components/Footer'

const { Col } = Grid
const App = () => {
  const [bikes, setBikes] = useState([])
  const [productCart, setProductCart] = useState([])

  useEffect(() => {
    bikes.map(item => console.log(item.price))
    getData().then(setBikes)
  }, [getData])

  const addProductCar = (id, name) => {
    console.log(`Has agregado el producto : ${name} con el id : ${id}`)
    //obtengo los productos actuales
    const arrayProducts = productCart
    //incluyo el nuevo producto
    arrayProducts.push(id)
    //actualizo el estado
    setProductCart(arrayProducts)
    //almaceno en el localStorage el nuevo carro
    localStorage.setItem(STORAGE_PRODUCTS_EC, productCart)
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

  useEffect(() => {
    getProductsCar()
  }, [])

  return (
    <Layout
      productCart={productCart}
      getProductsCar={getProductsCar}
      products={bikes}
    >
      <div>
        <Grid columns={24}>
          {bikes.map((item, key) => (
            <Col xs={24} sm={12} md={8} lg={6} key={key}>
              <CardItem
                addCart={addProductCar}
                price={`${item.price}`}
                title={item?.model}
                image={item?.imageBicycle || item?.image}
              />
            </Col>
          ))}
        </Grid>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover={false}
        />
        <Footer />
      </div>
    </Layout>
  )
}

export default App
