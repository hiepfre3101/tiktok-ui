import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('acc-item')}>
      <img className={cx('avatar')} src="https://picsum.photos/50/50" alt="avatar" />
      <div className={cx('item-info')}>
        <p className={cx('nick-name')}>
          <strong>tiin.vn</strong>
          <FontAwesomeIcon icon={faCircleCheck} className={cx('check')}/>
        </p>
        <p className={cx('name')}>Tiin.vn</p>
      </div>
    </div>
  );
}

export default AccountItem;
