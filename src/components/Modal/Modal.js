import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

import Portal from '../Portal';

const cx = classNames.bind(styles);

function Modal({ isOpen = false , children, onClose,  containerId=''}) {
  if(!isOpen) return null;
  return(
    <Portal containerId={containerId}>
      <div className={cx('wrapper')}>
          <div className={cx('overlay')}></div>
          <div className={cx('content')}>
             {children}
          </div>
     </div>
    </Portal>
  ) 
}

export default Modal;
