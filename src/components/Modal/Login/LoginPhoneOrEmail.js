import classNames from "classnames/bind";
import styles from '../Modal.module.scss';

const cx = classNames.bind(styles);


function LoginPhoneOrEmail() {
    return (<div className={cx("login-qr__wrapper")}>
        <h1 className={cx('login-title')}>Log in </h1>
    </div> );
}

export default LoginPhoneOrEmail;