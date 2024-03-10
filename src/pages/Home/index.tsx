import Header from '../../components/Header'
import RestauranteList from '../../components/RestauranteList'
import Loja from '../../models/Loja'

import japonesa from '../../assets/images/japones.png'
import italiano from '../../assets/images/italiano.png'
import estrela from '../../assets/images/estrela.png'

const primeira: Loja[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    avaliacao: '4.9',
    estrela: estrela,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    estrela: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: italiano
  }
]

const segunda: Loja[] = [
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    estrela: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: italiano
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    estrela: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: italiano
  }
]

const Home = () => (
  <>
    <Header />
    <RestauranteList lojas={primeira} />
    <RestauranteList lojas={segunda} />
    <RestauranteList lojas={segunda} />
  </>
)

export default Home
