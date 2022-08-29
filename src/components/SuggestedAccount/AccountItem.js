import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper } from '../Popper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
   const renderDesc=(props) =>{
    return (
        <div className={cx('item-desc')} tabIndex='-1' {...props}>
                <Wrapper>
                    <AccountPreview></AccountPreview>
                </Wrapper>
          </div> 
    )
   }

  return (
    <div> {/** fix warning Tippy */}
       <HeadlessTippy 
       interactive 
       delay={[800, 0]} 
       offset={[-18,0]}
       placement='bottom'
       render={renderDesc}>
      <div className={cx('acc-item')}>
        <img className={cx('avatar')} src="https://picsum.photos/50/50" alt="avatar" />
        <div className={cx('item-info')}>
          <p className={cx('nick-name')}>
            <strong>tiin.vn</strong>
            <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
          </p>
          <p className={cx('name')}>Tiin.vn</p>
        </div>
      </div>
    </HeadlessTippy>
    </div>
   
  );
}

export default AccountItem;
