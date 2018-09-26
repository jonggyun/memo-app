import React from 'react';
import styles from './FolderButton.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const FolderButton = ({onCreate, onRemove, onUpdate}) => (
  <div className={cx('folder-button')}>
        <Button onCustomEvent={onCreate}>A</Button>
        <Button onCustomEvent={onRemove}>D</Button>
        <Button onCustomEvent={onUpdate}>U</Button>
  </div>
);

export default FolderButton;