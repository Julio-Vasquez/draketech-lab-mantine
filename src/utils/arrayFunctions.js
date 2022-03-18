export const countDuplicateItems = (array, value) => {
  let count = 0
  array.forEach(item => {
    if (parseInt(item) === value) count++
  })
  return count
}

export const removeDuplicateItems = array => Array.from(new Set(array))

export const removeItem = (array, item) => {
  const index = array.indexOf(item)
  if (index > -1) array.splice(index, 1)
  return array
}
