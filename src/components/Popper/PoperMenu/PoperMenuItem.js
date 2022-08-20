import classNames from 'classnames/bind';
import styles from './PoperMenu.module.scss';


import Button from "~/components/Button";

const cx = classNames.bind(styles);
 function PoperMenuItem({data, onClick})  {
  const classes = cx('menu-item',{
    separate:data.separate
  })
  return (
      <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>
        {data.title}
      </Button>
  )
}
export default PoperMenuItem;