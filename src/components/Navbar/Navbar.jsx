import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/contato', label: 'Contato' },
    { path: '/extra', label: 'Equipe' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      {/* Logo limpo e estilizado */}
      <Link to="/" className={styles.logo}>
        BLACK<span>RED</span> MOTORS
      </Link>
      
      <button 
        className={styles.menuButton}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
      >
        <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
      </button>

      <ul className={`${styles.links} ${mobileMenuOpen ? styles.active : ''}`}>
        {navItems.map(item => (
          <li key={item.path}>
            <Link 
              to={item.path}
              className={`${styles.link} ${isActive(item.path) ? styles.linkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;