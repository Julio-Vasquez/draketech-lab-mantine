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

function CardItem({ image, title, price, addCart, id }) {
  return (
    <Card shadow="sm" className={card__item}>
      <Section>
        <Image src={image} alt="this is alt" height={170} fit="cover" />
      </Section>
      <div className={card__content}>
        <Badge color="orange" variant="light" className={card__item_title}>
          {title?.slice(0, 25)}
        </Badge>
        <Text className={texts}>Price of this bike is : ${price} USD</Text>
        <Button
          className={btn__add}
          color="green"
          fullWidth
          onClick={() => addCart(id, title)}
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
  price: propTypes.string.isRequired,
  addCart: propTypes.func.isRequired,
}

export default CardItem
