import { useProdutos } from '../contexts/ProdutosContext'
import ProdutoCard from '../components/ProdutoCard'

export default function Produtos() {
  const { produtos } = useProdutos()

  return (
    <div className="page">
      <h1 className="page-title">Produtos</h1>
      {produtos.length === 0 ? (
        <p className="page-text">Nenhum produto cadastrado.</p>
      ) : (
        <div className="grid">
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  )
}
