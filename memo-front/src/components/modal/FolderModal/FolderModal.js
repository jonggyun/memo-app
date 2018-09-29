import React from 'react';
import styles from './FolderModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const FolderModal = ({ visible, onCancel, onChange, folderName, onCreateFolder }) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>&times;</div>
      <div className={cx('title')}>폴더 생성</div>
      <div className={cx('description')}>생성하려는 폴더의 이름을 입력하세요</div>
      <input autoFocus type="text" placeholder="폴더이름 입력" value={folderName} onChange={onChange}/>
      <div className={cx('create-folder')} onClick={onCreateFolder}>폴더 생성</div>
    </div>
  </ModalWrapper>
);

export default FolderModal;