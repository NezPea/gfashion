import { JsonController, Method, Params } from 'routing-controllers'
import { CustomersControllerSpec, CUSTOMERS_ROUTES } from './_spec'
import {
  GetCustomerByIdReq,
  GetCustomerByIdRes
} from './_types/GetCustomerById'
import { GetCustomerByIdResMock } from './_types/GetCustomerById/index.mock'

@JsonController()
export class CustomersController implements CustomersControllerSpec {
  @Method(
    CUSTOMERS_ROUTES.getCustomerById.method,
    CUSTOMERS_ROUTES.getCustomerById.path
  )
  getCustomerById(@Params() params: GetCustomerByIdReq): GetCustomerByIdRes {
    return GetCustomerByIdResMock.build({
      id: params.customerId
    })
  }
}
