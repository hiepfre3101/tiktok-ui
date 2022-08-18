import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './PoperMenu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import PoperMenuItem from './PoperMenuItem';

const cx = classNames.bind(styles);
const PoperMenu = ({ children, items = [] }) => {
  const renderItems = () => {
    return items.map((item, index) => <PoperMenuItem key={index} data={item} />);
  };
  return (
    <Tippy
     delay={[0,700]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-poper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};
export default PoperMenu;
