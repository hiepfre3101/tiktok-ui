import classNames from 'classnames/bind';
import styles from '../Modal.module.scss';

const cx = classNames.bind(styles);
function LoginQr() {
  return (
    <div className={cx('login-qr__wrapper')}>
      <h1 className={cx('login-title')}>Log in with QR code</h1>
      <div className={cx('login-qr__content')}>
        <div className={cx('qr-body')}>
          <p>1. Open the TikTok app on your mobile device</p>
          <p>2. On Profile, tap</p>
          <p>3. Tap and scan the QR code to confirm your login</p>
        </div>
        <div className={cx('qr-img')}>
          <img
            src="https://lf-tiktok-web-test.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif"
            alt="qrcode"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginQr;
