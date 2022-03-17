import propTypes, { InferProps } from 'prop-types'

export const CartFooterPropTypes = {
  total: propTypes.number.isRequired,
}

export type CartFooterProps = InferProps<typeof CartFooterPropTypes>
