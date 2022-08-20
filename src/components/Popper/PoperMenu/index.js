import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './PoperMenu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import PoperMenuItem from './PoperMenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const PoperMenu = ({ children, items = [] }) => {
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history.length - 1];

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <PoperMenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      delay={[0, 700]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-poper')}>
            {history.length > 1 && <Header 
                     title={'Language'} 
                     onBack={() => {
                       setHistory((prev)=> prev.slice(0,prev.length-1));
                     }} />}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};
export default PoperMenu;