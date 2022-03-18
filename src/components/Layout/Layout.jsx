import { element, func, array } from 'prop-types'
import { AppShell, Header, Container } from '@mantine/core'

import HeaderLayout from '../Header'

const Layout = ({ children, getProductsCar, products, productCart }) => {
  return (
    <AppShell
      header={
        <Header height={60}>
          <HeaderLayout
            getProductsCar={getProductsCar}
            products={products}
            productCart={productCart}
          />
        </Header>
      }
    >
      <Container size={1250}>{children}</Container>
    </AppShell>
  )
}

Layout.propTypes = {
  children: element.isRequired,
  getProductsCar: func.isRequired,
  products: array.isRequired,
  productCart: array.isRequired,
}

export default Layout
