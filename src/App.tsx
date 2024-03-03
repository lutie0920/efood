import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Restaurante from './components/Restaurante'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Restaurante />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
