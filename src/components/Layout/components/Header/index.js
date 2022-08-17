import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import image from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={image.logo} alt="Tiktok" />
        <Tippy
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
        </Tippy>
        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
