import React from 'react'
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';


import Menu,{MenuItem} from './Menu';
import {HomeIcon, UserGroupIcon , VideoIcon} from '~/components/Icons/Icon';
import  SuggestedAccount from '~/components/SuggestedAccount'

const cx = classNames.bind(styles);
 function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
       <Menu>
           <MenuItem title='For You' icon={<HomeIcon/>} to={config.routes.home}/>
           <MenuItem title='Following' icon={<UserGroupIcon/>} to={config.routes.following}/>
           <MenuItem title='Live' icon={<VideoIcon/>} to={config.routes.live}/>
       </Menu>
       <SuggestedAccount label='Suggested Account'/>
       <SuggestedAccount label='Following Account'/>
    </aside>
  )
}

export default Sidebar;
