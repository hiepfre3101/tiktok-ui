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
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/Icon';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
import config from '~/config';
import ModalItem from '~/components/Modal/ModalItem';

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
         <ModalItem onClose={handleClosePortal}/>
      </Modal>
    </header>
  );
}

export default Header;
