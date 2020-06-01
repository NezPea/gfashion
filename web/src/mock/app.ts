import 'reflect-metadata'
// https://github.com/typestack/routing-controllers
import { createExpressServer } from 'routing-controllers'

import { CustomersController } from './controllers/customers'

const controllers = [CustomersController]

export const app = createExpressServer({
  classTransformer: true, // enable request payload validation by class-transform + class-validation
  validation: {
    whitelist: true, // required when `forbidNonWhitelisted: true`
    forbidNonWhitelisted: true, // avoid sending unwanted fields to the API
    forbidUnknownValues: true, // avoid sending unknown values to the API
    validationError: {
      // less verbose err msg
      target: false,
      value: false
    }
  },
  controllers
})
