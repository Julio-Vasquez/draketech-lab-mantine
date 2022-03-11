import { AppShell, Header, Container, Grid } from '@mantine/core'

import HeaderLayout from './../Header'

const Layout = ({ children }: any) => {
  return (
    <AppShell
      header={
        <Header height={60}>
          <HeaderLayout />
        </Header>
      }
    >
      <Container fluid>
        <Grid align="stretch">{children}</Grid>
      </Container>
    </AppShell>
  )
}

export default Layout
