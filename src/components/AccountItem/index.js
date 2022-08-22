import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Image from "../Image";


const cx = classNames.bind(styles);
 const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
        <Image className={cx('avatar')} src="https://picsum.photos/300/300" alt="" />
        <div className={cx('info')}>
            <p className={cx('name')}>
              Ahyhy
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>                          
            </p>
            <span className={cx('username')}>ahihi</span>
        </div>
    </div>
  )
}
export  default AccountItem;