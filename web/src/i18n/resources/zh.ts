import { Spec } from './_spec'

import { I18N_NS as userNs } from '../../pages/user/_i18n'
import { I18N_NS as gfashionNs } from '../../pages/GFashion/_i18n'
import { zh as userResZh } from '../../pages/user/_i18n/zh'
import { zh as gfashionResZh } from '../../pages/GFashion/_i18n/zh'

export const zh: Spec = {
  [userNs]: userResZh,
  [gfashionNs]: gfashionResZh
}
