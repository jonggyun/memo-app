import React from 'react';
import styles from './MemoList.scss';
import classNames from 'classnames/bind';

import Memos from 'components/memo/Memos';

const cx = classNames.bind(styles);

const MemoList = () => (
  <div>
    <div className={cx('memo-list')}>
      <Memos />
      <Memos />
    </div>
  </div>
);

export default MemoList;