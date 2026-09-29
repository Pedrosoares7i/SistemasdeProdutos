import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProdutos } from '../contexts/ProdutosContext'

export default function CadastroProduto() {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const { cadastrarProduto } = useProdutos()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    const precoNumero = Number(preco)

    if (!nome.trim() || isNaN(precoNumero) || precoNumero <= 0) {
      alert('Preencha o nome e um preço válido maior que zero.')
      return
    }

    cadastrarProduto(nome.trim(), precoNumero)
    navigate('/produtos')
  }

  return (
    <div className="page">
      <h1 className="page-title">Cadastrar Produto</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do produto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço</label>
          <input
            id="preco"
            type="number"
            step="0.01"
            min="0"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="0.00"
          />
        </div>
        <button type="submit" className="btn">
          Cadastrar
        </button>
      </form>
    </div>
  )
}
