import propTypes from 'prop-types'
import { Group, Image, Title } from '@mantine/core'

import Logo from './../../assets/img/png/logo.png'
import Cart from '../Cart/Cart'

import { title } from './style.module.scss'

const LayoutHeader = ({ getProductsCar, products, productCart }) => {
  return (
    <>
      <Group position="apart">
        <Group>
          <Image src={Logo} height={50} width={50} />

          <Title order={2} className={title}>
            Diego Bici y el pollito :c
          </Title>
        </Group>

        <Cart
          getProductsCar={getProductsCar}
          products={products}
          productCart={productCart}
        />
        <div></div>
      </Group>
    </>
  )
}

LayoutHeader.propTypes = {
  getProductsCar: propTypes.func.isRequired,
  products: propTypes.array.isRequired,
  productCart: propTypes.array.isRequired,
}

export default LayoutHeader
