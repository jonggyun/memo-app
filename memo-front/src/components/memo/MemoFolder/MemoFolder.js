import React from 'react';
import styles from './MemoFolder.scss';
import classNames from 'classnames/bind';

//import Folders from 'components/folders/Folders';
import FoldersContainer from 'containers/folders/FoldersContainer';
import InputBoxContainer from 'containers/common/InputBoxContainer';

const cx = classNames.bind(styles);

const MemoFolder = () => (
  <div className={cx('memo-folder')}>
    <div className={cx('folder-title')}>
      폴더 리스트
    </div>
    <div className={cx('folder-list')}>
      <FoldersContainer />
      <InputBoxContainer />
    </div>
  </div>
);

export default MemoFolder;