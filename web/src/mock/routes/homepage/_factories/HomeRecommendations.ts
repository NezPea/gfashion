import Chance from 'chance'
import * as Factory from 'factory.ts'
import { HomeRecommendations } from '../../../../app/types'
import { BrandMock } from '../../../factories/Brand'
import { DesignerMock } from '../../../factories/Designer'
import { ProductMock } from '../../../factories/Product'

const chance = Chance()

export const HomeRecommendationsMock = Factory.Sync.makeFactory<
  HomeRecommendations
>({
  customerId: Factory.each(
    () =>
      // @ts-ignore
      chance.integer({ min: 1 }) as BigInt
  ),
  recommendedProducts: Factory.each(() => ProductMock.buildList(10)),
  recommendedDesigners: Factory.each(() => DesignerMock.buildList(10)),
  recommendedBrands: Factory.each(() => BrandMock.buildList(10)),
  followingDesigners: Factory.each(() => DesignerMock.buildList(10)),
  followingBrands: Factory.each(() => BrandMock.buildList(10))
})
