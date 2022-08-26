import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Button = ({
            to,
            href,
            onClick,
            children,
            className,
            leftIcon,
            outline = false,
            primary = false,
            disabled=false,
            round=false,
            small = false,
            large = false,
            text = false,
            ...passProps
            }) => {
            let Comp = 'button';
            const props = {
                onClick,
                ...passProps,
            };
            if(disabled){
                delete props.onClick;
            }
            if (to) {
                props.to = to;
                Comp = Link;
            } else if (href) {
                props.href = href;
                Comp = 'a';
            }
            const classes = cx('wrapper', {
                [className]:className,// custom css cho 1 button rieng
                primary,
                outline,
                text,
                small,
                large,
                round,
            });
            return (
                <Comp className={classes} {...props}>
                   {leftIcon && <span className={cx('icon')}>{leftIcon}</span>} 
                    <span className={cx('title')}>{children}</span>
                </Comp>
            );
};

Button.propTypes={
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    round: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    children:PropTypes.node.isRequired,
}
export default Button;
