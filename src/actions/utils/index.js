/* eslint-disable consistent-return */
const getValidValue = obj => {
  return {
    chipTags: "chipTags" in obj ? obj.chipTags : [],
    description: "description" in obj ? obj.description : ""
  }
}

const getConcatenatedValue = (firstToAdd, secToAdd) =>
  secToAdd instanceof Array
    ? `${firstToAdd} ${secToAdd.join(" ")}`.trim()
    : `${secToAdd} ${firstToAdd.join(" ")}`.trim()

const filteringParams = obj => {
  const filtered = {}

  Object.keys(obj).forEach(key => {
    if (
      obj[key] === null ||
      obj[key] === undefined ||
      obj[key].length === 0 ||
      (obj[key] instanceof Array && obj[key][0].length === 0)
    ) {
      return null
    }
    filtered[key] = obj[key]
  })

  return filtered
}

export { getValidValue, getConcatenatedValue, filteringParams }
