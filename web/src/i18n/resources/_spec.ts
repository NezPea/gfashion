import { ResourceKey } from 'i18next'

import { I18N_NS as user } from '../../pages/user/_i18n'
import { I18N_NS as gfashion } from '../../pages/GFashion/_i18n'

/* Example:
  type Namespaces =
  | typeof module1
  | typeof module2
  | typeof module3
  | typeof module4
  | typeof module5
 */
type Namespaces =
  | typeof user
  | typeof gfashion
export type Spec = Record<Namespaces, ResourceKey>
