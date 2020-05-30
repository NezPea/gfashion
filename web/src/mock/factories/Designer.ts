import Chance from 'chance'
import * as Factory from 'factory.ts'
import { HomepageDesigner } from '../../app/types'

const chance = Chance()

export const DesignerMock = Factory.Sync.makeFactory<HomepageDesigner>({
  id: Factory.each(
    () =>
      // @ts-ignore
      chance.integer({ min: 1 }) as BigInt
  ),
  name: Factory.each(() => chance.name()),
  cooperatingBrands: Factory.each(() => chance.n(chance.company, chance.d4())),
  country: Factory.each(() => chance.country({ full: true })),
  photoUrl: 'https://placeimg.com/320/320/people'
})
