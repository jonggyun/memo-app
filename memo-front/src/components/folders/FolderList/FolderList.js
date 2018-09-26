import React from 'react';
import styles from './FolderList.scss';
import classNames from 'classnames/bind';

//import Folders from 'components/folders/Folders';
import FoldersContainer from 'containers/folders/FoldersContainer';
import FolderButtonContainer from 'containers/folders/FolderButtonContainer';
import InputBoxContainer from 'containers/common/InputBoxContainer';

const cx = classNames.bind(styles);

const FolderList = () => (
  <div className={cx('memo-folder')}>
    <div className={cx('folder-title')}>
      FOLDER
    </div>
    <FolderButtonContainer /> 
    <div className={cx('folder-list')}>
      <FoldersContainer />
      {/* <InputBoxContainer /> */}
    </div>
  </div>
);

export default FolderList;