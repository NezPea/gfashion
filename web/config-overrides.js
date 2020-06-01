/* References:
 * - https://github.com/timarney/react-app-rewired
 * - https://github.com/arackaf/customize-cra
 */
const { override, addDecoratorsLegacy } = require('customize-cra')

module.exports = (config, env) => {
  return override(
    addDecoratorsLegacy() // for class-validator + class-transformer family
  )(config, env)
}
