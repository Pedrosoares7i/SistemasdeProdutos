import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import ProdutoDetalhes from './pages/ProdutoDetalhes'
import CadastroProduto from './pages/CadastroProduto'
import Sobre from './pages/Sobre'
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada'

export default function App() {
  return (
    <>
      <Menu />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/cadastrar" element={<CadastroProduto />} />
          <Route path="/produtos/:id" element={<ProdutoDetalhes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </main>
    </>
  )
}
