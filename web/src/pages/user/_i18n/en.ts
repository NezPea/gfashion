import { _spec } from './_spec'

export const en: typeof _spec = {
  _common: {
    phone_num: 'Phone number',
    email: 'Email',
    ver_code: {
      _self: 'Verification code',
      send: 'Send'
    },
    password: {
      _self: 'Password',
      at_least_8_chars: 'Should at least 8 characters'
    }
  },
  find_pwd: {
    _self: 'Forgot password',
    pls_enter_reg_phone: 'Please enter the phone number you used for register',
    submit: 'Submit'
  },
  login: {
    _self: 'Login',
    email_or_phone_num: 'Email or phone number'
  },
  reg: {
    _self: 'Register',
    create_acct: 'Register'
  }
  ,my_profile: {
    _self: 'Profile',
    avatar: 'Avatar *',
    change: 'Change',
    surname: 'Surname *',
    ownname: 'Ownname *',
    save: 'Save'
  }

};
