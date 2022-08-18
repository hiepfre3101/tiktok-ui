import classNames from 'classnames/bind';
import styles from './PoperMenu.module.scss';


import Button from "~/components/Button";

const cx = classNames.bind(styles);
 const PoperMenuItem = ({data}) => {
  return (
      <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')} >
        {data.title}
      </Button>
  )
}
export default PoperMenuItem;