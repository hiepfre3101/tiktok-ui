import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Modal from '~/components/Modal';
import image from '~/assets/images';
import Button from '~/components/Button/Button';
import PoperMenu from '~/components/Popper/PoperMenu/PoperMenu';
import {
  InboxIcon,
  MessageIcon,
  UploadIcon,
  QRIcon,
  FacebookIcon,
  LINEIcon,
  SingleUserIcon,
  GoogleIcon,
  TwitterIcon,
  CloseIcon,
} from '~/components/Icons/Icon';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
import config from '~/config';

const cx = classNames.bind(styles);

const POPERMENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Languague',
      data: [
        { type: 'language', code: 'vi', title: 'Tieng Viet' },
        { type: 'language', code: 'en', title: 'English' },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcut',
  },
];


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChangeFooter, setIsChangeFooter] = useState(true);
  const currentUser = false;
  const iconCustom = {
    iconSvg: <UploadIcon />,
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hiep',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coin',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...POPERMENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  const loginOptions = [
    {
      icon:<QRIcon />,
      title:'Use QR code',
      children:{
         title:'Log in with QR code',
         to:"/login/qrcode",
         data:{
           img:'https://lf-tiktok-web-test.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif',
           desc:` 1. Open the TikTok app on your mobile device

                  2. On Profile, tap 
                  
                  3. Tap  and scan the QR code to confirm your login`,
            form:false,      
         }
      }
    },
    {
        icon:<SingleUserIcon />,
        title:'Use phone / email / username',
        to:"/login/phone-or-email",
        children:{
             img:'',
             desc:'',
             form:true
        }
    },
    {
      icon:<FacebookIcon/>,
      title:'Continue with Facebook',
      to:"",
    },
    {
      icon:<GoogleIcon/>,
      title:'Continue with Google',
      to:"",
    },
    {
      icon:<TwitterIcon/>,
      title:'Continue with Twitter',
      to:"",
    },
    {
      icon:<LINEIcon/>,
      title:'Continue with LINE',
      to:"",
    },
  ];
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //do somethings with case
        break;
      default:
    }
  };

  const handleClosePortal = () => {
    setIsOpen(false);
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home}>
          <img src={image.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button text leftIcon={iconCustom.iconSvg}>
                Upload
              </Button>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text leftIcon={iconCustom.iconSvg}>
                Upload
              </Button>
              <Button primary onClick={() => setIsOpen(true)}>
                Log in
              </Button>
            </>
          )}
          <PoperMenu items={currentUser ? userMenu : POPERMENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image src="https://picsum.photos/40/40" alt="User" className={cx('user-avatar')} />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </PoperMenu>
        </div>
      </div>

      <Modal isOpen={isOpen} containerId="login-modal">
       <div className={cx('login-container')}>
          <div className={cx('login-main')}>
            <p className={cx('login-title')}>Log in to TikTok</p>
            <div className={cx('login-options')}>
               {loginOptions.map((option,index)=>(
                 <Button key={index} leftIcon={option.icon} text className='login-btn'>{option.title}</Button>
               ))}
            </div>
          </div> 
          <footer className={cx('foot-login')}>
                {isChangeFooter ? (
                  <div className={cx('foot-wrapper')}>
                    <p className={cx('foot-text')}>Don't have an account?</p>  
                    <a href="/signup" className={cx('foot-singup')} onClick={()=>setIsChangeFooter(false)}>Sign up</a>
                  </div>
                ) : (
                  <div className={cx('foot-wrapper')}>
                      <p className={cx('foot-text')}>Already have an account?</p> 
                      <a href="/login" className={cx('foot-singup')} onClick={()=>setIsChangeFooter(true)}>Log in</a>
                  </div>
                  )}
            </footer>
          <button onClick={handleClosePortal} className={cx('close-btn')}><CloseIcon /></button> 
       </div>
      </Modal>
    </header>
  );
}

export default Header;
