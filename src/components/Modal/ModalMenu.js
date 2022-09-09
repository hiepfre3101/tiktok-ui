import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

import Button from '../Button';

const cx = classNames.bind(styles);
function ModalMenu({ items = [], changeContent, setTitle = false }) {
   let Comp;
  let itemSignUp=null;
   const handleSignUp =()=>{
          if(setTitle){
           itemSignUp=items.filter((option)=>{
               return option.useToSignUp;
            })
          }else {
             itemSignUp = items;
          }
  }
  return (
    <div className={cx('login-main')}>
      {setTitle ? (
        <p className={cx('login-title')}>Sign up for TikTok</p>
      ) : (
        <p className={cx('login-title')}>Log in to TikTok</p>
      )}
      <div className={cx('login-options')}>
        {handleSignUp()}
        {
           itemSignUp.map((option, index) => {
            const isParent = !!option.children;
            Comp = (
              <Button
                key={index}
                leftIcon={option.icon}
                text
                className="login-btn"
                onClick={() => {
                  if (isParent) {
                    changeContent(`login${option.children}`);
                  }
                }}
              >
                {option.title}
              </Button>
            );
            return Comp;
          })
        }
      </div>
    </div>
  );
}

export default ModalMenu;
