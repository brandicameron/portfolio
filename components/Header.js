import styles from './Header.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenCloseMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={menuOpen ? `${styles.header} ${styles.open}` : `${styles.header}`}>
      <Link href='#skipToContent' className={styles.skipLink}>
        Skip to Content
      </Link>

      <Link onClick={handleCloseMenu} href='/' aria-label='Go to homepage.' className={styles.logo}>
        Brandi <span className={styles.hideMobile}>Cameron</span>{' '}
        <span className={styles.tagline}>
          <span className={styles.accent}>Frontend Dev</span>{' '}
          <span className={styles.hideMobile}>&& Domain Hoarder</span>
        </span>
      </Link>

      <nav>
        <ul className={menuOpen ? `${styles.headerNav} ${styles.open}` : `${styles.headerNav}`}>
          {navItems.map((item) => (
            <li key={uuidv4()} onClick={handleCloseMenu}>
              <Link
                href={item.href}
                target={item.target}
                rel={item.rel}
                aria-label={item.ariaLabel}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* ******************* Mobile Hamburger Button ******************* */}

        <button
          className={styles.hamburgerBtn}
          onClick={handleOpenCloseMenu}
          aria-expanded={menuOpen}
        >
          <span className='sr-only'>{menuOpen ? 'Close' : 'Open'} navigation menu.</span>
          <span className={`${styles.hamburgerLines} ${styles.line1}`} aria-hidden='true'></span>
          <span className={`${styles.hamburgerLines} ${styles.line2}`} aria-hidden='true'></span>
          <span className={`${styles.hamburgerLines} ${styles.line3}`} aria-hidden='true'></span>
        </button>
      </nav>
    </header>
  );
}

const navItems = [
  {
    title: 'Work',
    href: '/',
  },
  {
    title: 'About',
    href: '/',
  },
  {
    title: 'Contact',
    href: '/',
  },
  {
    title: 'Resume',
    href: '/brandi-cameron-resume.pdf',
    target: '_blank',
    rel: 'noopener noreferrer',
    ariaLabel: 'Resumé',
  },
];
