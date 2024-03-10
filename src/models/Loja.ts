class Loja {
  image: string
  name: string
  avaliacao: string
  description: string
  infos: string[]
  estrela: string
  id: number

  constructor(
    id: number,
    image: string,
    name: string,
    avaliacao: string,
    description: string,
    infos: string[],
    estrela: string
  ) {
    this.id = id
    this.image = image
    this.name = name
    this.avaliacao = avaliacao
    this.description = description
    this.infos = infos
    this.estrela = estrela
  }
}

export default Loja
