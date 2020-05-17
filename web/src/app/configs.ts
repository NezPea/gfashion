export default () => {
  switch (process.env.NODE_ENV) {
    case 'development': {
      return {
        api_address: 'http://localhost:5005'
      }
    }
    case 'test': {
      return {
        api_address: ''
      }
    }
    case 'production': {
      return {
        api_address: ''
      }
    }
    default: {
      return {
        api_address: 'http://localhost:5005'
      }
    }
  }
}