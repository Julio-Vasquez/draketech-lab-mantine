import { element } from 'prop-types'
import { AppShell, Header, Container } from '@mantine/core'

import HeaderLayout from '../Header'

const Layout = ({ children }) => {
  return (
    <AppShell
      header={
        <Header height={60}>
          <HeaderLayout />
        </Header>
      }
    >
      <Container size={1250}>{children}</Container>
    </AppShell>
  )
}

Layout.propTypes = {
  children: element.isRequired,
}

export default Layout
