import { Link } from 'react-router-dom'

export default function PaginaNaoEncontrada() {
  return (
    <div className="page">
      <h1 className="page-title">404</h1>
      <p className="page-text">A página informada não existe.</p>
      <Link to="/" className="card-link">
        Voltar ao início
      </Link>
    </div>
  )
}
