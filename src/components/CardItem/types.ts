import propTypes, { InferProps } from 'prop-types'

export const CardItemPropTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
}

export type CardItemProps = InferProps<typeof CardItemPropTypes>
