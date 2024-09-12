import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import Restaurants from '../../models/Restaurants'

import japonesa from '../../assets/images/japonesa.png'
import italiana from '../../assets/images/italiana.png'

const japao: Restaurants[] = [
  {
    id: 1,
    image: japonesa,
    infos: ['Destaque da semana', 'Japonesa'],
    name: 'Hioki Sushi',
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: italiana,
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const italia: Restaurants[] = [
  {
    id: 3,
    image: italiana,
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: italiana,
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <RestaurantsList restaurant={japao} />
      <RestaurantsList restaurant={italia} />
      <RestaurantsList restaurant={italia} />
    </div>
  </>
)

export default Home
