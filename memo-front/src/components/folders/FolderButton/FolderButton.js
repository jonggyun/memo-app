import React from 'react';
import styles from './FolderButton.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const FolderButton = () => (
  <div className={cx('folder-button')}>
        <Button>A</Button>
        <Button>D</Button>
        <Button>U</Button>
  </div>
);

export default FolderButton;