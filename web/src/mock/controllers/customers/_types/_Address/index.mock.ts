import Chance from 'chance'
import * as Factory from 'factory.ts'
import { Address } from '.'

const chance = Chance()

export const AddressMock = Factory.Sync.makeFactory<Required<Address>>({
  id: Factory.each(() => chance.natural()),
  firstname: Factory.each(() => chance.first()),
  lastname: Factory.each(() => chance.last()),
  company: Factory.each(() => chance.company()),
  telephone: Factory.each(() => chance.phone()),
  street: Factory.each(() =>
    chance.n(chance.street, chance.integer({ min: 1, max: 3 }))
  ),
  city: Factory.each(() => chance.city()),
  region_id: Factory.each(() => chance.natural()), // TODO: spec?
  postcode: Factory.each(() => chance.postcode()),
  country_id: Factory.each(() => String(chance.integer({ min: 1, max: 195 }))), // TODO: spec?
  default_billing: Factory.each(() => chance.bool()),
  default_shipping: Factory.each(() => chance.bool())
})
