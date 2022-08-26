import { useState, forwardRef } from 'react';
import image from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className ,fallback:customFallback = image.noImage , ...props}, ref)=>{
  const [fallback, setFallback] = useState('');
  const handleErro = () => {
    setFallback(customFallback);
  };
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      className={cx('wrapper', className)}
      src={fallback || src}
      alt={alt}
      {...props}
      ref={ref}
      onError={handleErro}
    />
  );
})
Image.propTypes={
  src:PropTypes.string,
  alt:PropTypes.string,
  className:PropTypes.string,
}
export default Image;
