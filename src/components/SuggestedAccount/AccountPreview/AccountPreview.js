import PropTypes from 'prop-types';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview({data}) {
    return (  
        <div className={cx("wrapper")}>
             <header className={cx('header')}>
                 <img src={data.avatar}alt="ava" className={cx('avatar')}/>
                 <Button primary className={cx('follow-btn')}>Follow</Button>
             </header>
             <section className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>{data.nickname}</strong>
                   {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />} 
                </p>
                <p className={cx('name')}>{data.first_name+' '+data.last_name}</p>

                <article className={cx('analys-flex')}>
                    <p className={cx('analytics')}>
                         <strong className={cx('number')}>{data.followers_count}</strong>
                         <span className={cx('label')}>Followers</span>
                    </p>
                    <p className={cx('analytics')}>
                         <strong className={cx('number')}>{data.likes_count} </strong>
                         <span className={cx('label')}>Likes</span>
                    </p>
                </article>
              </section>
        </div>
    );
}
AccountPreview.propTypes = {
    data:PropTypes.object.isRequired,
}
export default AccountPreview;