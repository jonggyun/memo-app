import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>;

const Button = ({children, onCustomEvent, to, disabled}) => {
  // to 값이 존재하면 link를 사용! 없으면 div를 사용.
  // 비활성화되어 있는 버튼일 때도 div를 사용
  const Element = (to && !disabled) ? Link : Div;

  return (
    <Element className={cx('button')} onClick={onCustomEvent} to={to}> 
      {children}
    </Element>
  )
}

export default Button;