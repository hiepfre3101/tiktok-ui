import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import image from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import PoperMenu from '~/components/Popper/PoperMenu';
import { MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const POPERMENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Languague',
      data: [
        {
          code: 'vi',
          title: 'Tieng Viet',
        },
        {
          code: 'en',
          title: 'English',
        },
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
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;
  const iconCustom  = {
    iconSvg : <UploadIcon />
  } 
  useEffect(() => {
    setInterval(() => {
      setSearchResult([]);
    }, 0);
  }, []);

   const userMenu = [
    {
        icon:<FontAwesomeIcon  icon={faUser}/>,
         title:"View profile",
         to:"/@hiep"
    },
    {
        icon:<FontAwesomeIcon  icon={faCoins}/>,
         title:"Get coin",
         to:"/coin"
    },
    {
        icon:<FontAwesomeIcon  icon={faGear}/>,
         title:"Setting",
         to:"/setting"
    },
     ...POPERMENU_ITEMS,
     {
      icon:<FontAwesomeIcon  icon={faSignOut}/>,
         title:"Log out",
         to:"/logout",
         separate:true
     }
   ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={image.logo} alt="Tiktok" />
        <HeadlessTippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-label')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
               <Button text leftIcon={iconCustom.iconSvg}>Upload</Button>
            <Tippy  content="Messages" placement='bottom'>
                <button className={cx('action-btn')}>
                <MessageIcon />
              </button>
            </Tippy>
            </>
          ) : (
            <>
              <Button text  leftIcon={iconCustom.iconSvg}>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <PoperMenu items={currentUser ? userMenu : POPERMENU_ITEMS}>
          {currentUser ? (
              <Image   src="https://picsum.photos/40/40" alt="User"  className={cx('user-avatar')}/>
          ) : (
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          )}
            
          </PoperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
