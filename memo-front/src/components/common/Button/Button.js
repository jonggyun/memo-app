import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({children, onClick}) => (
  <div className={cx('button')}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Button;