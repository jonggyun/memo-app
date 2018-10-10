import React from 'react';
import styles from './MemoHeader.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MemoHeader = ({title}) => (
  <div className={cx('memo-header')}>
    {title}
  </div>
);

export default MemoHeader;