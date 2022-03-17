import { Grid, Loader } from '@mantine/core'
import { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import CardItem from '../components/CardItem'

import { getData } from './../services/bikesServices'

const { Col } = Grid

const App = () => {
  const [bikes, setBikes] = useState<any[]>([])
  const [store, setStore] = useState([{}])

  useEffect(() => {
    getData().then(setBikes)
  }, [getData])

  return (
    <Layout>
      {bikes.length === 0 ? (
        <Loader />
      ) : (
        bikes.map((item, key) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={3} key={key}>
            <CardItem
              key={`card-${key}`}
              text={`The price of this incredible and beautiful bike is : ${item.price} USD`}
              title={item?.model}
              image={item?.imageBicycle || item?.image}
            />
          </Col>
        ))
      )}
    </Layout>
  )
}

export default App
