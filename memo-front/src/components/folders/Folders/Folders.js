import React from 'react';
import styles from './Folders.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

/**
 * 폴더 하나 하나를 가르키는 컴포넌트
 */
const FolderItem = ({name, onSelect, id}) => {
  const handleSelected = () => {
    onSelect(id, name);
  }
  return (
    <div className={cx('folder')} onClick={handleSelected}>
      <div className={cx('folder-name')}>
        {name}
      </div>
      <div className={cx('memo-add-button')}>
        <Button>+</Button>
      </div>
    </div>
  )
};

// db에 저장된 폴더들을 가져와서 뿌리는 역할을 해야한다.
const Folders = ({folders, onSelect}) => {
  const folderList = folders.map(
    (folder) => {
      const { _id, name } = folder;
      return (
        <FolderItem 
          id={_id}
          key={_id}
          name={name}
          onSelect={onSelect}
        />
      )
    }
  );
  return (
    <div>
      {folderList}
    </div>
  )
};

export default Folders;