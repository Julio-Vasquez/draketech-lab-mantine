import { RenderItemProps, RenderItemPropTypes } from './types'

const RenderItem = ({
  product: { id, name, price, image },
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: RenderItemProps) => {
  return <div>RenderItem</div>
}
RenderItem.propTypes = RenderItemPropTypes

export default RenderItem
