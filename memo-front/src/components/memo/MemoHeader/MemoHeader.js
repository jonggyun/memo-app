import React from 'react';
import styles from './MemoHeader.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const MemoHeader = ({onCreate, onSave ,onRemove}) => (
  <div className={cx('memo-header')}>
    <Button onCustomEvent={onCreate}>New</Button>
    <Button onCustomEvent={onSave}>Save</Button>
    <Button onCustomEvent={onRemove}>Del</Button>
    <input 
      type="text"
      placeholder="검색"
    />
  </div>
);

export default MemoHeader;