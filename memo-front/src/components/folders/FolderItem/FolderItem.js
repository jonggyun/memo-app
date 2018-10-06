import React from 'react';
import styles from './FolderItem.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

/**
 * 폴더 하나 하나를 가르키는 컴포넌트
 */
const FolderItem = ({name, onSelect, id, onAddMemo, selected}) => {
  const handleSelected = () => {
    onSelect(id, name, selected);
  }
  return (
    <div className={cx('folder', {selected: selected})} onClick={handleSelected}>
      <div className={cx('folder-name')}>
        {name}
      </div>
      <div className={cx('memo-add-button')} onClick={(e)=>{ 
        onAddMemo();
        e.stopPropagation();
      }}>
        <Button>+</Button>
      </div>
    </div>
  )
};

export default FolderItem;