import { Spec } from './_spec'

import { I18N_NS as userNs } from '../../pages/user/_i18n'
import { I18N_NS as gfashionNs } from '../../pages/GFashion/Home/_i18n'
import { I18N_NS as productNs } from '../../pages/GFashion/product/_i18n'
import { zh as userResZh } from '../../pages/user/_i18n/zh'
import { zh as homeResZh } from '../../pages/GFashion/Home/_i18n/zh'
import { zh as productResZh } from '../../pages/GFashion/product/_i18n/zh'

export const zh: Spec = {
  [userNs]: userResZh,
  [gfashionNs]: homeResZh,
  [productNs]: productResZh
}
