import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper } from '../Popper';
import Image from '~/components/Image';
import AccountPreview from './AccountPreview';



const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const renderDesc = (props) => {
    return (
      <div className={cx('item-desc')} tabIndex="-1" {...props}>
        <Wrapper>
          <AccountPreview data={data}/>
        </Wrapper>
      </div>
    );
  };

  return (
    <div>
      {' '}
      {/** fix warning Tippy */}
      <HeadlessTippy interactive delay={[800, 0]} offset={[-18, 0]} placement="bottom" render={renderDesc}>
        <div className={cx('acc-item')}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
          <div className={cx('item-info')}>
            <p className={cx('nick-name')}>
              <strong>{data.nickname}</strong>
              {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} /> }
            </p>
            <p className={cx('name')}>{data.first_name+' '+data.last_name}</p>
          </div>
        </div>
      </HeadlessTippy>
    </div>
  );
}
AccountItem.propTypes = {
  data:PropTypes.object.isRequired,
}
export default AccountItem;
