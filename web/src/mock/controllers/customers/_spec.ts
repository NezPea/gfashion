import { CreateControllerSpec, RequestMethod } from '../../types'

export const CUSTOMERS_ROUTES = {
  getCustomerById: {
    method: RequestMethod.get,
    path: '/customers/:customerId'
  }
}

export type CustomersControllerSpec = CreateControllerSpec<
  typeof CUSTOMERS_ROUTES
>
