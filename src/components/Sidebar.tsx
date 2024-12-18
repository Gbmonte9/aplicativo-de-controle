import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light vh-100" style={{ width: '180px', position: 'fixed', left: 0, top: 0 }}>
      <div className="container">
        <div className='p-1 text-center'>
            <h2 className="mb-4">ADC</h2>
        </div>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item p-0">
          <Link className="nav-link text-start" to="/dashboard">
            <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item p-0">
          <Link className="nav-link text-start" to="/carteira">
            <i className="bi bi-people"></i> Carteira
          </Link>
        </li>
        <li className="nav-item p-0">
          <Link className="nav-link text-start" to="/fontes-renda">
            <i className="bi bi-calendar"></i> Renda
          </Link>
        </li>
        <li className="nav-item p-0">
          <Link className="nav-link text-start" to="/despesa">
            <i className="bi bi-calendar"></i> Despesas
          </Link>
        </li>
        <li className="nav-item p-0">
          <Link className="nav-link text-start" to="/relatorio">
            <i className="bi bi-question-circle"></i> Relatórios
          </Link>
        </li>
        <li className="nav-item p-0">
          <Link className="nav-link text-start" to="/perfil-configuracoes">
            <i className="bi bi-gear"></i> Configurações
          </Link>
        </li>
        <li className="nav-item p-0">
          <Link className="nav-link text-start" to="/">
            <i className="bi bi-box-arrow-right"></i> Sair
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;