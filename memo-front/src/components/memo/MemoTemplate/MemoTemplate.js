import React, { Component } from 'react';
import styles from './MemoTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class MemoTemplate extends Component {
  render() {
    return (
      <div className={cx('memo-header')}>
        header
        <div className={cx('panes')}>
          <div className={cx('pane', 'memo-folder')}>
            memo-folder
          </div>
          <div className={cx('pane', 'memo-list')}>
            memo-list
          </div>         
          <div className={cx('pane', 'memo-content')}>
            memo-content
          </div>
        </div>
      </div>
    );
  }
}

export default MemoTemplate;