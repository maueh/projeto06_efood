class Restaurant {
  id: number
  name: string
  description: string
  category: string
  infos: string[]
  evaluation: number
  image: string

  constructor(
    id: number,
    name: string,
    description: string,
    category: string,
    infos: string[],
    evaluation: number,
    image: string
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.category = category
    this.infos = infos
    this.evaluation = evaluation
    this.image = image
  }
}

export default Restaurant
