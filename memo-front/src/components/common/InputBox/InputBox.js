import React, { Component } from 'react';
import styles from './InputBox.scss';
import classNames from 'classnames/bind';
import * as createFolder from 'store/modules/createFolder';

const cx = classNames.bind(styles);

class InputBox extends Component {
  handleChange = (e) => {
    const { onChangeName } = this.props;
    // 계속 변하는 값을 redux에서 가져올수 있도록 설정하기
    const { value } = e.target;
    const folderName = value;
    onChangeName({folderName});
  }

  render() {
    const { handleChange } = this;
    const { folderName } = this.props;
    return (
      <input 
        className={cx('input-box')}
        type="text" 
        name="title"
        value={folderName}
        onChange={handleChange}
      />
    );
  }
}

export default InputBox;