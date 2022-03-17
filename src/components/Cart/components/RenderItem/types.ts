import propTypes, { InferProps } from 'prop-types'

export const RenderItemPropTypes = {
  product: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  }).isRequired,
  quantity: propTypes.number,
  increaseQuantity: propTypes.func.isRequired,
  decreaseQuantity: propTypes.func.isRequired,
}

export type RenderItemProps = InferProps<typeof RenderItemPropTypes>
