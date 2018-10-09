import React from 'react';
import styles from './Memos.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Memos = ({createDate, title, content}) => (
  <div className={cx('memos')}>
    <div className={cx('memo-title')}>
      <div className={cx('title')}>
        {title}
      </div>
      <div className={cx('date')}>
        {createDate.substring(0,10)}
      </div>
    </div>
    <div className={cx('memo-content')}>
      {content}
    </div>
  </div>
);

export default Memos;