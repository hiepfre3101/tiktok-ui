import Header from '~/layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
  return (
    <div className={styles['wrapper']}>
      <Header></Header>
      <div className={styles['container']}>
        <Sidebar></Sidebar>
        <div className={styles['content']}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
