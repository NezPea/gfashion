const faker = require('faker')

module.exports = () => {
  const data = {
    homepage: {
      recommendedBrands: [],
      recommendedDesigners: [],
      recommendedProducts: [],
      followingBrands: [],
      followingDesigners: []
    },
  }

  let products = [1, 2, 3, 4, 5, 6].map((n) => {
    return {
      "id": n,
      "name": `product${n}`,
      "photoUrl": faker.image.imageUrl(),
      "isFeatured": [1, 2].indexOf(n) != -1 ? true : false
    }
  })

  let designers = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
    return {
      "id": n,
      "name": faker.name.firstName(),
      "cooperatingBrands": [
        "BALMAIN"
      ],
      "country": faker.address.country(),
      "photoUrl": faker.image.imageUrl()
    }
  })

  let brands = ["Barmain", "HERMES", "CHANEL", "CHAUMET", "Brioni", "Barmain", "HERMES", "CHANEL"].map((name, i) => {
    return {
      "id": i,
      "name": name,
      "country": faker.address.country(),
      "photoUrl": faker.image.imageUrl(),
      "link": `${faker.internet.url()}`
    }
  })

  let followingBrands = [brands[0], brands[3]]
  let followingDesigners = [designers[6], designers[4]]

  return {
    homepage: {
      recommendedBrands: brands,
      recommendedDesigners: designers,
      recommendedProducts: products,
      followingBrands,
      followingDesigners
    }
  }
}