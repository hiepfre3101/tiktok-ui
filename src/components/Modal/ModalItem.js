import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  QRIcon,
  FacebookIcon,
  LINEIcon,
  SingleUserIcon,
  GoogleIcon,
  TwitterIcon,
  CloseIcon,
} from '~/components/Icons/Icon';
import ModalMenu from './ModalMenu';

import { LoginQr, LoginPhoneOrEmail } from './Login';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const loginOptions = [
  {
    icon: <QRIcon />,
    title: 'Use QR code',
    children: 'Qr',
    useToSignUp:false,
  },
  {
    icon: <SingleUserIcon />,
    title: 'Use phone / email / username',
    children: 'PhoneOrEmail',
    useToSignUp:true,
  },
  {
    icon: <FacebookIcon />,
    title: 'Continue with Facebook',
    useToSignUp:true,
  },
  {
    icon: <GoogleIcon />,
    title: 'Continue with Google',
    useToSignUp:true,
  },
  {
    icon: <TwitterIcon />,
    title: 'Continue with Twitter',
    useToSignUp:true,
  },
  {
    icon: <LINEIcon />,
    title: 'Continue with LINE',
    useToSignUp:true,
  },
];
function ModalItem({ onClose }) {
  const [isChangeFooter, setIsChangeFooter] = useState(true);
  const [content, setContent] = useState('menu');

  const renderContent = () => {
    let Comp;
    if (content === 'menu') {
      Comp = <ModalMenu items={loginOptions} changeContent={handleChangeContent} />;
      if (!isChangeFooter) {
        Comp = <ModalMenu items={loginOptions} changeContent={handleChangeContent} setTitle />;
      }
    } else if (content === 'loginQr') {
      Comp = <LoginQr />;
    } else if (content === 'loginPhoneOrEmail') {
      Comp = <LoginPhoneOrEmail />;
    }
    return Comp;
  };
  const onBackLogin = () => {
    if (content === 'loginQr' || content === 'loginPhoneOrEmail') {
      setContent('menu');
    }
  };
  const handleChangeContent = (contentValue) => {
    setContent(contentValue);
  };
  return (
    <div className={cx('login-container')}>
      {content.includes('login') && (
        <FontAwesomeIcon icon={faChevronLeft} onClick={onBackLogin} className={cx('back-btn')} />
      )}
      {renderContent()}
      <footer className={cx('foot-login')}>
        {isChangeFooter ? (
          <div className={cx('foot-wrapper')}>
            <p className={cx('foot-text')}>Don't have an account?</p>
            <p className={cx('foot-singup')} onClick={() => setIsChangeFooter(false)}>
              Sign up
            </p>
          </div>
        ) : (
          <div>
            <div className={cx('foot-policy')}>
              <p className={cx('policy-text')}>
                By continuing, you agree to TikTok’s <a href="/">Terms of Service</a> and confirm that you have read
                TikTok’s <a href="/">Privacy Policy</a>.
              </p>
            </div>
            <div className={cx('foot-wrapper')}>
              <p className={cx('foot-text')}>Already have an account?</p>
              <p className={cx('foot-singup')} onClick={() => setIsChangeFooter(true)}>
                Log in
              </p>
            </div>
          </div>
        )}
      </footer>
      <button onClick={onClose} className={cx('close-btn')}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default ModalItem;
