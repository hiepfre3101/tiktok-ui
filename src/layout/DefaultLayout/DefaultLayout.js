import Header from '~/layout/components/Header/Header';
import Sidebar from '~/layout/components/Sidebar';
import styles from './DefaultLayout.module.scss';

import PropTypes from 'prop-types'

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
DefaultLayout.propTypes = {
  children:PropTypes.node.isRequired,
}
export default DefaultLayout;
