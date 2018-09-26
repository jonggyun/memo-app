import React, { Component } from 'react';
import styles from './MemoTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class MemoTemplate extends Component {
  render() {
    const { folder, list } = this.props;
    return (
      <div className={cx('memo-header')}>
        <div className={cx('panes')}>
          <div className={cx('pane', 'memo-folder')}>
            {folder}
          </div>
          <div className={cx('pane', 'memo-list')}>
            {list}
          </div>         
        </div>
      </div>
    );
  }
}

export default MemoTemplate;