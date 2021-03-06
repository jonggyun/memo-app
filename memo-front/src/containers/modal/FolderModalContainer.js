import React, { Component } from 'react';
import FolderModal from 'components/modal/FolderModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from 'store/modules/common';
import * as folderActions from 'store/modules/folder';

class FolderModalContainer extends Component {

  handleCancel = () => {
    const { CommonAction, type } = this.props;
    const param = {
      visible: false,
      type: type
    }
    CommonAction.folderModal(param);
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { FolderAction } = this.props;
    FolderAction.dispatchFolderName(value);
  }

  removeFolder = async () => {
    const { id, FolderAction, CommonAction, type } = this.props;
    try {
      await FolderAction.deleteFolder({id});

      const param = {
        visible: false,
        type: type,
        complete: true,
      }      
      CommonAction.folderModal(param);

    } catch (e) {
      console.log(e)
    }
  }

  createFolder = async () => {
    const { folderName, FolderAction, CommonAction, type } = this.props;
    const folder = {
      folderName: folderName
    }
    try {
      await FolderAction.createFolder(folder);
      
      const param = {
        visible: false,
        type: type,
        complete: true,
      }
      CommonAction.folderModal(param);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { visible, type, folderName } = this.props;
    const { handleCancel, handleChange, createFolder, removeFolder } = this;
    return (
      <FolderModal 
        visible={visible}
        type={type}
        onCancel={handleCancel}
        folderName={folderName}
        onChange={handleChange}
        onCreateFolder={createFolder}
        onRemoveFolder={removeFolder}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // immutable JS에 대한 내용 익히기!
  return {
    visible: state.common.getIn(['folderModal','visible']),
    type: state.common.getIn(['folderModal','type']),
    folderName: state.folder.get('folderName'), 
    id: state.folder.get('id')
  }
};

const mapDispatchToProps = (dispatch) => ({
  CommonAction: bindActionCreators(commonActions, dispatch),
  FolderAction: bindActionCreators(folderActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderModalContainer);