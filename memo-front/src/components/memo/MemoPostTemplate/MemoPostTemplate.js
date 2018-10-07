import React, { Component } from 'react';
import styles from './MemoPostTemplate.scss';
import classNames from 'classnames/bind';
import MemoPostPaneContainer from 'containers/memo/MemoPostPaneContainer';

const cx = classNames.bind(styles);

class MemoPostTemplate extends Component {
  render() {
    return (
      <div className={cx('memo-post-template')}>
        <div className={cx('post-header')}></div>
        <div className={cx('post-pane')}>
          <MemoPostPaneContainer />
        </div>
        <div className={cx('post-footer')}></div>
      </div>
    );
  }
}

export default MemoPostTemplate;