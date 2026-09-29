import { useParams, Link } from 'react-router-dom'
import { useProdutos } from '../contexts/ProdutosContext'

export default function ProdutoDetalhes() {
  const { id } = useParams()
  const { produtos } = useProdutos()

  const produto = produtos.find((p) => p.id === Number(id))

  if (!produto) {
    return (
      <div className="page">
        <h1 className="page-title">Produto não encontrado</h1>
        <Link to="/produtos" className="card-link">
          Voltar para a lista de produtos
        </Link>
      </div>
    )
  }

  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div className="page">
      <h1 className="page-title">{produto.nome}</h1>
      <div className="card card-detalhes">
        <p><strong>Código:</strong> {produto.id}</p>
        <p><strong>Preço:</strong> {precoFormatado}</p>
      </div>
      <Link to="/produtos" className="card-link">
        Voltar para a lista
      </Link>
    </div>
  )
}
