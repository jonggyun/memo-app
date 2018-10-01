import React from 'react';
import styles from './Memos.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Memos = () => (
  <div className={cx('memos')}>
    <div className={cx('memo-title')}>
      memo-title
    </div>
    <div className={cx('memo-content')}>
      memo-content
    </div>
  </div>
);

export default Memos;