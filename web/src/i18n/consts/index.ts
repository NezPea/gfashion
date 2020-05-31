/**
 * References:
 * - https://support.google.com/webmasters/answer/189077#language-codes
 * - https://support.google.com/webmasters/answer/182192
 */
export enum Lang {
  En = 'en', // American English should be fine
  Zh = 'zh' // Simplified Chinese should be fine
}

// TODO: detect browser lang and auto set using i18next-browser-languagedetector or other libs
// TODO: should we save the user lang preference to DB? If that so, we might need to store it in Redux
export const DEFAULT_LANG = Lang.En

export const AVAILABLE_LANGS_SIMPLE = [Lang.En, Lang.Zh]

export const AVAILABLE_LANGS = [
  {
    key: Lang.En,
    label: 'English'
  },
  {
    key: Lang.Zh,
    label: '中文简体'
  }
]
