import React from 'react';
import styles from './FolderModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const FolderModal = ({ visible, type, onCancel, onChange, folderName, onCreateFolder, onRemoveFolder }) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')} type={type}>
      <div onClick={onCancel} className={cx('close')}>&times;</div>
      {type === 'create' && <div className={cx('title')}>폴더 생성</div> }
      {type === 'remove' && <div className={cx('title')}>폴더 삭제</div>}
      {type === 'create' && [
        <div key="description" className={cx('description')}>생성하려는 폴더의 이름을 입력하세요</div>,
        <input key="input" autoFocus type="text" placeholder="폴더이름 입력" value={folderName} onChange={onChange}/>,
        <div key="createFolder" className={cx('create-folder')} onClick={onCreateFolder}>폴더 생성</div>
        ]
      }
      {type === 'remove' && [
        <div key="description" className={cx('description')}>선택된 폴더: {folderName}</div>,
        <div key="deleteFolder" className={cx('create-folder')} onClick={onRemoveFolder}>폴더 삭제</div>
        ]
      }
    </div>
  </ModalWrapper>
);

export default FolderModal;