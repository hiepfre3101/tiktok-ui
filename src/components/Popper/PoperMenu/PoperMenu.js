import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './PoperMenu.module.scss';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import PoperMenuItem from './PoperMenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFunc = () => {};

function PoperMenu({ children, items = [], hideOnClick = false }, onChange = defaultFunc) {
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
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
  return (
    <Tippy
      offset={[10, 10]}
      delay={[0, 700]}
      interactive
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-poper')}>
            {history.length > 1 && <Header title={currentMenu.title} onBack={handleBack} />}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}
PoperMenu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default PoperMenu;
