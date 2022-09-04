import styles from './SuggestedAccount.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function SuggestedAccount({label, data=[], onViewChange, isSeeAll}) {
    return ( 
    <div className={cx('wrapper')}>
          <p className={cx('label')}>{label}</p>
          {data.map((user)=>(
            <AccountItem key={user.id} data={user}/>
          ))}
          <p className={cx('more-btn')} onClick={()=>onViewChange(isSeeAll)}>
           {isSeeAll ?  'See less':'See all'}
           </p>
     </div> 
    );
}

SuggestedAccount.propTypes = {
    label:PropTypes.string.isRequired,
    data:PropTypes.array,
}
export default SuggestedAccount;