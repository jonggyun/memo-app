import React, { Component } from 'react';
import InputBox from 'components/common/InputBox';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as folder from 'store/modules/folder';

class InputBoxContainer extends Component {
  onChangeName = ({folderName}) => {
    this.props.setFolderName(folderName);
  }

  render() {
    const { folderName } = this.props;
    const { onChangeName } = this;
    return (
      <div>
        <InputBox 
          onChangeName={onChangeName}
          folderName={folderName}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { folderName } = state.createFolder;
  return {
    folderName: folderName
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFolderName: bindActionCreators(folder.dispatchFolderName, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBoxContainer);