import { _spec } from './_spec'

export const zh: typeof _spec = {
  _common: {
    phone_num: '手机号码',
    email: '电子邮箱',
    ver_code: {
      _self: '验证码',
      send: '获取验证码'
    },
    password: {
      _self: '密码',
      at_least_8_chars: '至少 8 位字符'
    }
  },
  find_pwd: {
    _self: '忘记密码',
    pls_enter_reg_phone: '请输入您注册时所使用的手机号码',
    submit: '提交'
  },
  login: {
    _self: '登录',
    email_or_phone_num: '电子邮箱或手机号码'
  },
  reg: {
    _self: '注册',
    create_acct: '创建账户'
  }
  ,my_profile: {
    _self: '个人信息',
    avatar: '头像 *',
    change: '修改',
    surname: '姓氏 *',
    ownname: '名字 *',
    save: '保存'
  }
};
