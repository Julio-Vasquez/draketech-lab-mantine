import { Group, Image, Title } from '@mantine/core'

import Logo from './../../assets/img/png/logo.png'

import { title } from './style.module.scss'

const LayoutHeader = () => {
  return (
    <Group>
      <Image src={Logo} height={50} width={50} />

      <Title order={2} className={title}>
        Diego Bici
      </Title>
    </Group>
  )
}

export default LayoutHeader
