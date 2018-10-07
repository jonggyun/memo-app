import React from 'react';
import styles from './MemoPostPane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MemoPostPane = () => (
  <div>
    <div className={cx('memo-post-pane')}>
      <div className={cx('title')}>
        여기가 메모 제목입니다.
      </div>
      <div className={cx('content')}>
        여기에 에디터를 붙일까?
        그냥 쓸까??
        에디터를 붙이는게 더 재미날듯??
      </div>
    </div>
  </div>
);

export default MemoPostPane;