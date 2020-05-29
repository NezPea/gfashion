import { Spec } from './_spec'

import { I18N_NS as userNs } from '../../pages/user/_i18n'
import { I18N_NS as gfashionNs } from '../../pages/GFashion/_i18n'
import { en as userResEn } from '../../pages/user/_i18n/en'
import { en as gfashionResEn } from '../../pages/GFashion/_i18n/en'

export const en: Spec = {
  [userNs]: userResEn,
  [gfashionNs]: gfashionResEn
}