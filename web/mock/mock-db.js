let originalData = require('./mock-db.json')
var homepage = require('./datas/homepage')

module.exports = () => {
  let result = {
    ...originalData,
    ...homepage()
  }

  return result
}