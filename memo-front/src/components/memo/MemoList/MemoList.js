import React from 'react';
import styles from './MemoList.scss';
import classNames from 'classnames/bind';

import Memos from 'components/memo/Memos';

const cx = classNames.bind(styles);

const MemoList = ({memoList}) => {
  if(memoList === null) return null;

  const memos = memoList.map((memo, index) => {
    const { createdate, title, content } = memo;
    return <Memos
              key={index}
              createDate={createdate}
              title={title}
              content={content}
            />
  });
  return (
    <div>
      <div className={cx('memo-list')}>
        {memos}
      </div>
    </div>
)};

export default MemoList;