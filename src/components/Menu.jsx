import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Sistema de Produtos</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/produtos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/produtos/cadastrar" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Cadastrar
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
