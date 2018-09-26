import React, { Component } from 'react';
import FolderButton from 'components/folders/FolderButton';
import { connect } from 'react-redux';
import * as createFolder from 'store/modules/createFolder';

class FolderButtonContainer extends Component {

  createContent = () => {
    
  }

  saveContent = () => {
    // 나중에 여기서 type check를 한다음에 폴더, 메모 추가 등등 분기를 태워야한다.
    const { folderName } = this.props;

    const param = {
      folderName : folderName
    }
    createFolder.cFolder(param);
  }

  removeContent = () => {
    alert('removeFolder');
  }

  render() {

    const { createContent, saveContent ,removeContent } = this;
    return (
      <div>
        <FolderButton 
          onCreate={createContent}
          onSave={saveContent}
          onRemove={removeContent}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    folderName: state.createFolder.folderName
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

// 컨테이너 컴포넌트에서는 상태값을 가져와서 처리하는 역할을 해야하는 듯.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderButtonContainer);