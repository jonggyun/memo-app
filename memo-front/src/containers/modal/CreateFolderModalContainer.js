import React, { Component } from 'react';
import CreateFolderModal from 'components/modal/CreateFolderModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from 'store/modules/common';
import * as createFolderActions from 'store/modules/createFolder';

class CreateFolderModalContainer extends Component {

  handleCancel = () => {
    const { CommonAction } = this.props;
    CommonAction.createFolderModal(false);
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { CreateFolderAction } = this.props;
    CreateFolderAction.dispatchFolderName(value);
  }

  createFolder = () => {
    const { folderName, CreateFolderAction, CommonAction } = this.props;
    
    CreateFolderAction.cFolder({folderName});
    CommonAction.createFolderModal(false);
  }

  render() {
    const { visible, folderName } = this.props;
    const { handleCancel, handleChange, createFolder } = this;
    return (
      <CreateFolderModal 
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
    folderName: state.createFolder.folderName
  }
};

const mapDispatchToProps = (dispatch) => ({
  CommonAction: bindActionCreators(commonActions, dispatch),
  CreateFolderAction: bindActionCreators(createFolderActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateFolderModalContainer);