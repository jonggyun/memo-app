import React, { Component } from 'react';
import styles from './MemoTemplate.scss';
import classNames from 'classnames/bind';

//import CreateFolderModal from 'components/modal/CreateFolderModal';
import CreateFolderModalContainer from 'containers/modal/CreateFolderModalContainer';

const cx = classNames.bind(styles);

class MemoTemplate extends Component {
  render() {
    const { folderList, memoList } = this.props;
    return (
      <div className={cx('memo-header')}>
        <div className={cx('panes')}>
          <div className={cx('pane', 'memo-folder')}>
            {folderList}
          </div>
          <div className={cx('pane', 'memo-list')}>
            {memoList}
          </div>         
        </div>
        <CreateFolderModalContainer />
      </div>
    );
  }
}

export default MemoTemplate;