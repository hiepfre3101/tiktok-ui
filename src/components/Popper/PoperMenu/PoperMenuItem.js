import classNames from 'classnames/bind';
import styles from './PoperMenu.module.scss';


import Button from "~/components/Button";

const cx = classNames.bind(styles);
 const PoperMenuItem = ({data, onClick}) => {
  return (
      <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')} onClick={onClick}>
        {data.title}
      </Button>
  )
}
export default PoperMenuItem;