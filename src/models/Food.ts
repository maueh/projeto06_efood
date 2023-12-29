class Food {
  id: number
  name: string
  description: string
  portion: string
  price: number
  image: string

  constructor(
    id: number,
    name: string,
    description: string,
    portion: string,
    price: number,
    image: string
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.portion = portion
    this.price = price
    this.image = image
  }
}

export default Food
