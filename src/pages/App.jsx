import { useEffect, useState } from 'react'
import { Grid, Loader } from '@mantine/core'

import Cart from '../components/Cart'
import Layout from '../components/Layout'
import CardItem from '../components/CardItem'

import { getData } from '../services/bikesServices'

const { Col } = Grid
const App = () => {
  const [bikes, setBikes] = useState([])

  useEffect(() => {
    getData().then(setBikes)
  }, [getData])

  return (
    <Layout>
      <div>
        <Cart />
        <Grid columns={24}>
          {bikes.map((item, key) => (
            <Col xs={24} sm={12} md={8} lg={6} key={key}>
              <CardItem
                text={`Price of this bike is : ${item.price} USD`}
                title={item?.model}
                image={item?.imageBicycle || item?.image}
              />
            </Col>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export default App
