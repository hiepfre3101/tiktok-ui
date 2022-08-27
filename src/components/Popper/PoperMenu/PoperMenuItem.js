import classNames from 'classnames/bind';
import styles from './PoperMenu.module.scss';
import PropTypes from 'prop-types'

import Button from "~/components/Button/Button";

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

PoperMenuItem.propTypes = {
   data:PropTypes.object.isRequired,
   onClick : PropTypes.func,
}
export default PoperMenuItem;