import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
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


import image from '~/assets/images';
import Button from '~/components/Button';
import PoperMenu from '~/components/Popper/PoperMenu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import routesConfig from '~/config/routes';

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
  const currentUser = true;
  const iconCustom  = {
    iconSvg : <UploadIcon />
  } 
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
       <Link to={routesConfig.home}><img src={image.logo} alt="Tiktok" /></Link>
    
           <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
               <Button text leftIcon={iconCustom.iconSvg}>Upload</Button>
            <Tippy  content="Messages" placement='bottom'>
                <button className={cx('action-btn')}>
                   <MessageIcon />
                </button>
            </Tippy> 
            <Tippy content="Inbox" placement='bottom'>
              <button className={cx('action-btn')}>
                    <InboxIcon /> 
                </button>
            </Tippy>
              
            </>
          ) : (
            <>
              <Button text  leftIcon={iconCustom.iconSvg}>Upload</Button>
              <Button primary >Log in</Button>
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
