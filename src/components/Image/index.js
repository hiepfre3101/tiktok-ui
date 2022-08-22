import { useState, forwardRef } from 'react';
import image from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Image({ src, alt, className ,fallback:customFallback = image.noImage , ...props }, ref) {
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
}

export default forwardRef(Image);
