import React, { Component } from 'react';
import FolderButton from 'components/folders/FolderButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from 'store/modules/common';

class FolderButtonContainer extends Component {

  onCreate = () => {
    const { CommonAction } = this.props;
    const param = {
      visible: true,
      type: 'create'
    }
    CommonAction.folderModal(param);
  }

  onRemove = () => {
    const { CommonAction } = this.props;
    const param = {
      visible: true,
      type: 'remove'
    }
    CommonAction.folderModal(param);    
  }

  onUpdate = () => {
    alert('updateFolder');
  }

  render() {

    const { onCreate, onRemove, onUpdate } = this;
    return (
      <div>
        <FolderButton 
          onCreate={onCreate}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    folderName: state.folder.get('folderName'),
    id: state.folder.get('id'),
    visible: state.common.getIn(['folderModal','visible'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    CommonAction: bindActionCreators(commonActions, dispatch)
  }
}

// 컨테이너 컴포넌트에서는 상태값을 가져와서 처리하는 역할을 해야하는 듯.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderButtonContainer);