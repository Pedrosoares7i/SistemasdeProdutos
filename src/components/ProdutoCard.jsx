import { Link } from 'react-router-dom'

export default function ProdutoCard({ produto }) {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div className="card">
      <h3 className="card-title">{produto.nome}</h3>
      <p className="card-price">{precoFormatado}</p>
      <Link to={`/produtos/${produto.id}`} className="card-link">
        Ver detalhes
      </Link>
    </div>
  )
}
