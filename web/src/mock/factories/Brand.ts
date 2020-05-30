import Chance from 'chance'
import * as Factory from 'factory.ts'
import { HomepageBrand } from '../../app/types'

const chance = Chance()

export const BrandMock = Factory.Sync.makeFactory<HomepageBrand>({
  id: Factory.each(
    () =>
      // @ts-ignore
      chance.integer({ min: 1 }) as BigInt
  ),
  name: Factory.each(() => chance.capitalize(chance.word())),
  country: Factory.each(() => chance.country({ full: true })),
  photoUrl: 'https://placeimg.com/320/320/any',
  link: Factory.each(() => chance.url())
})
