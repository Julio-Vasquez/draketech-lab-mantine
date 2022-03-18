import propTypes from 'prop-types'
import { Card, Image, Text, Badge, Button } from '@mantine/core'

import {
  card__item,
  texts,
  btn__add,
  card__item_title,
  card__content,
} from './style.module.scss'

const { Section } = Card

function CardItem({ image, title, text, addCart }) {
  console.log(image)
  console.log(title)
  console.log(text)

  return (
    <Card shadow="sm" className={card__item}>
      <Section>
        <Image src={image} alt="this is alt" height={170} fit="cover" />
      </Section>
      <div className={card__content}>
        <Badge color="orange" variant="light" className={card__item_title}>
          {title?.slice(0, 25)}
        </Badge>
        <Text className={texts}>{text}</Text>
        <Button
          className={btn__add}
          color="green"
          fullWidth
          onClick={() => addCart(text, title)}
        >
          Add to cart
        </Button>
      </div>
    </Card>
  )
}

CardItem.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  addCart: propTypes.func.isRequired,
}

export default CardItem
