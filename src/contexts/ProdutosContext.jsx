import { createContext, useContext, useState } from 'react'

export const ProdutosContext = createContext()

export function ProdutosProvider({ children }) {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Teclado', preco: 120 },
    { id: 2, nome: 'Mouse', preco: 80 },
    { id: 3, nome: 'Monitor', preco: 900 },
  ])

  function cadastrarProduto(nome, preco) {
    const novoProduto = {
      id: Date.now(),
      nome,
      preco,
    }
    setProdutos((prev) => [...prev, novoProduto])
  }

  return (
    <ProdutosContext.Provider value={{ produtos, cadastrarProduto }}>
      {children}
    </ProdutosContext.Provider>
  )
}

export function useProdutos() {
  return useContext(ProdutosContext)
}
