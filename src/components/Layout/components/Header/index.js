import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['wrapper']}>
      <div className={styles['inner']}></div>
    </header>
  );
}

export default Header;
