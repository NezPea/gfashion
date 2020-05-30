import Chance from 'chance'
import * as Factory from 'factory.ts'
import { HomepageProduct } from '../../app/types'

const chance = Chance()

export const ProductMock = Factory.Sync.makeFactory<HomepageProduct>({
  id: Factory.each(
    () =>
      // @ts-ignore
      chance.integer({ min: 1 }) as BigInt
  ),
  name: Factory.each(() => chance.word()),
  photoUrl: 'https://placeimg.com/320/320/tech',
  isFeatured: Factory.each(() => chance.bool())
})
