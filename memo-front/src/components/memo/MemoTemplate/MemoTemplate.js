import React, { Component } from 'react';
import styles from './MemoTemplate.scss';
import classNames from 'classnames/bind';

import FolderModalContainer from 'containers/modal/FolderModalContainer';

const cx = classNames.bind(styles);

class MemoTemplate extends Component {
  render() {
    const { folderList, memoList, history } = this.props;
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
        <FolderModalContainer
          history={history}
        />
      </div>
    );
  }
}

export default MemoTemplate;