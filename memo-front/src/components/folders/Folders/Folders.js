import React from 'react';
import styles from './Folders.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 폴더 하나 하나를 가르키는 컴포넌트
 */
const FolderItem = ({name}) => {
  return (
    <div className={cx('folder')}>
      {name}
    </div>
  )
};

// db에 저장된 폴더들을 가져와서 뿌리는 역할을 해야한다.
const Folders = ({folders}) => {
  const folderList = folders.map(
    (folder) => {
      const { _id, name } = folder;
      return (
        <FolderItem 
          id={_id}
          key={_id}
          name={name}
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