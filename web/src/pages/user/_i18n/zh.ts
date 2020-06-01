import { _spec } from './_spec'

export const zh: typeof _spec = {
  _common: {
    phone_num: '手机号码',
    email: '电子邮箱',
    ver_code: {
      _seo: {
        title: '验证码 | GFashion'
      },
      _self: '验证码',
      send: '获取验证码'
    },
    password: {
      _seo: {
        title: '密码 | GFashion'
      },
      _self: '密码',
      at_least_8_chars: '至少 8 位字符'
    }
  },
  find_pwd: {
    _seo: {
      title: '忘记密码 | GFashion'
    },
    _self: '忘记密码',
    pls_enter_reg_phone: '请输入您注册时所使用的手机号码',
    submit: '提交'
  },
  login: {
    _seo: {
      title: '登录 | GFashion'
    },
    _self: '登录',
    email_or_phone_num: '电子邮箱或手机号码'
  },
  reg: {
    _seo: {
      title: '注册 | GFashion'
    },
    _self: '注册',
    create_acct: '创建账户'
  },
  my_profile: {
    _seo: {
      title: '账号信息 | GFashion'
    },
    _self: '账号信息',
    // avatar: '头像',
    editprofile: '编辑账户信息',
    surname: '姓',
    ownname: '名字',
    changepassword: '更改密码',
    currentpassword: '当前密码',
    newpassword: '新密码',
    confirmpassword: '确认新密码 ',
    passwordStrength: '密码强度：',
    emptypassword: '无密码',
    weakpassword: '弱',
    mediumpassword: '中等',
    strongpassword: '强',
    save: '保存'
  }
}
