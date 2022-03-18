export const countDuplicateItems = (array, value) => {
  let count = 0
  array.forEach(item => {
    if (item === value) count++
  })

  return count
}

export const removeDuplicateItems = array => {
  console.log(array)
  return Array.from(new Set(array))
}

export const removeItem = (array, item) => {
  console.log(array.indexOf(item))
  const index = array.indexOf(item)
  if (index > -1) array.splice(index, 1)
  return array
}
