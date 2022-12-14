import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounceValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
       setLoading(true)
       
       const result = await searchServices.search(debounceValue)
       setSearchResult(result);
       
       setLoading(false)
    };

    fetchApi();
  }, [debounceValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleSearchValue=(e)=>{
         const searchValue = e.target.value;
         if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue);
         }
  };
  return (
    //Using a wrapper <div> tag around reference element solves
    //this by creating a new parentNode context.
   <div>
      <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        interactive
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-label')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={handleSearchValue}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button
              className={cx('clear')}
              onClick={(e) => {
                setSearchValue('');
                inputRef.current.focus();
                setSearchResult([]);
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
  
          <button className={cx('search-btn')} onMouseDown={(e)=>e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
   </div>
  );
}
export default Search;
