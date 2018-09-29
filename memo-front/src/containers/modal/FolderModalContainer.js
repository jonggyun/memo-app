import React, { Component } from 'react';
import FolderModal from 'components/modal/FolderModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from 'store/modules/common';
import * as folderActions from 'store/modules/folder';

class FolderModalContainer extends Component {

  handleCancel = () => {
    const { CommonAction } = this.props;
    CommonAction.folderModal(false);
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { CreateFolderAction } = this.props;
    CreateFolderAction.dispatchFolderName(value);
  }

  createFolder = async () => {
    const { folderName, CreateFolderAction, CommonAction, history } = this.props;
    
    const folder = {
      folderName: folderName
    }
    try {
      await CreateFolderAction.createFolder(folder);
      CommonAction.folderModal(false);
      history.push('/'); // 이거 왜 안되는거지?? router를 나눠야하나? 나중에 확인해보기
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { visible, folderName } = this.props;
    const { handleCancel, handleChange, createFolder } = this;
    return (
      <FolderModal 
        visible={visible}
        onCancel={handleCancel}
        folderName={folderName}
        onChange={handleChange}
        onCreateFolder={createFolder}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // immutable JS에 대한 내용 익히기!
  const visible = state.common.getIn(['folderModal','visible']);
  return {
    visible: visible,
    folderName: state.folder.folderName
  }
};

const mapDispatchToProps = (dispatch) => ({
  CommonAction: bindActionCreators(commonActions, dispatch),
  CreateFolderAction: bindActionCreators(folderActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderModalContainer);