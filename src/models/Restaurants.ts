class Restaurants {
  id: number
  image: string
  infos: string[]
  rating: string
  name: string
  description: string

  constructor(
    id: number,
    image: string,
    infos: string[],
    rating: string,
    name: string,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.rating = rating
    this.name = name
    this.description = description
  }
}

export default Restaurants
