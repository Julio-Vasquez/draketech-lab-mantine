import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

import { CardItemPropTypes, CardItemProps } from './types'

import { card__item, texts, btn__add } from './style.module.scss'

const { Section } = Card
function CardItem({ image, title, text }: CardItemProps): JSX.Element {
  return (
    <div className={card__item}>
      <Card shadow="sm">
        <Section>
          <Image src={image} alt="this is alt" height={170} fit="cover" />
        </Section>
        <Group>
          <Badge color="green" variant="light">
            on sale
          </Badge>
          <Text weight={500}>{title}</Text>
        </Group>
        <Text className={texts}>{text}</Text>
        <Button className={btn__add} color="green" fullWidth>
          Add to cart
        </Button>
      </Card>
    </div>
  )
}

CardItem.propTypes = CardItemPropTypes

export default CardItem
