import React from 'react';
import styles from './Memos.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Memos = () => (
  <div className={cx('memos')}>
    <div className={cx('memo-title')}>
      <div className={cx('title')}>
        memo-title
      </div>
      <div className={cx('date')}>
        2018.01.01
      </div>
    </div>
    <div className={cx('memo-content')}>
      memo-content
    </div>
  </div>
);

export default Memos;