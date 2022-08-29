import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (  
        <div className={cx("wrapper")}>
             <header className={cx('header')}>
                 <img src="https://picsum.photos/50/50" alt="ava" className={cx('avatar')}/>
                 <Button primary className={cx('follow-btn')}>Follow</Button>
             </header>
             <section className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>tiin.vn</strong>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
                </p>
                <p className={cx('name')}>Tiin.vn</p>

                <article className={cx('analys-flex')}>
                    <p className={cx('analytics')}>
                         <strong className={cx('number')}>8.2M </strong>
                         <span className={cx('label')}>Followers</span>
                    </p>
                    <p className={cx('analytics')}>
                         <strong className={cx('number')}>429M </strong>
                         <span className={cx('label')}>Likes</span>
                    </p>
                </article>
              </section>
        </div>
    );
}

export default AccountPreview;