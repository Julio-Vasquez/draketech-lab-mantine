import propTypes, { InferProps } from 'prop-types'

export const CarHeaderPropTypes = {
  closeCart: propTypes.func.isRequired,
  emptyCart: propTypes.func.isRequired,
}

export type CarHeaderProps = InferProps<typeof CarHeaderPropTypes>
