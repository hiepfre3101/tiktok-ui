import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import { useState, useEffect } from 'react';

import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, VideoIcon } from '~/components/Icons/Icon';
import * as userServices from '~/services/usersServices';
import SuggestedAccount from '~/components/SuggestedAccount';

const INIT_PAGE =4;
const PER_PAGE = 5;

const cx = classNames.bind(styles);
function Sidebar() {
  const currentUser = false;
  const [page, setPage] = useState(INIT_PAGE);
  const [isSeeAll, setIsSeeAll] = useState(false);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    userServices
      .getSuggested({ page , perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUsers((prevData) => [...prevData, ...data]);
      })
      .catch((error) => console.log(error));
  }, [page]);

  {/** wait for fix*/}
  const handleViewChange = (isSeeAll) => {
    if(isSeeAll){
        setPage(page+1)
    }else{
      
    }
  };
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" icon={<HomeIcon />} to={config.routes.home} />
        <MenuItem title="Following" icon={<UserGroupIcon />} to={config.routes.following} />
        <MenuItem title="LIVE" icon={<VideoIcon />} to={config.routes.live} />
      </Menu>
      <SuggestedAccount 
          label="Suggested Account" 
          data={suggestedUsers}
          isSeeAll={isSeeAll} 
          onViewChange={handleViewChange} />
       {currentUser && <SuggestedAccount label="Following Account" data={suggestedUsers} />} 
    </aside>
  );
}

export default Sidebar;
