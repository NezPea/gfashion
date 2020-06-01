import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  IsInt,
  IsArray,
  IsBoolean
} from 'class-validator'

export class Address {
  @IsOptional()
  @IsInt()
  id?: number

  @IsNotEmpty()
  @IsString()
  firstname: string = ''

  @IsNotEmpty()
  @IsString()
  lastname: string = ''

  @IsOptional()
  @IsString()
  company: string = ''

  @IsNotEmpty()
  @IsPhoneNumber('US') // TODO: US only? Should allow other countries?
  telephone: string = '' // TODO: It should be 2 - 3 parts

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  street: string[] = []

  @IsString()
  city: string = '' // TODO: it should be an ID or code instead of any user input

  @IsInt()
  region_id: number = NaN

  @IsOptional()
  @IsString()
  postcode: string = '' // TODO: is it necessary?

  @IsInt()
  country_id!: string // TODO: range (min, max)? enum?

  @IsBoolean()
  default_billing!: boolean

  @IsBoolean()
  default_shipping!: boolean
}
