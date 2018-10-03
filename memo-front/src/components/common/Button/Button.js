import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({children, onCustomEvent}) => (
  <div className={cx('button')} onClick={onCustomEvent}>
    {children}
  </div>
);

export default Button;