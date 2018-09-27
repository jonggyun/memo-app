import React, { Component } from 'react';
import CreateFolderModal from 'components/modal/CreateFolderModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from 'store/modules/common';

class CreateFolderModalContainer extends Component {

  // x표를 눌렀을 때 창 닫기.
  // visible 상태 값에 false를 전달한다.
  onCancel = () => {
    const { CommonAction } = this.props;
    CommonAction.createFolderModal(false);
  }

  render() {
    // 여기에 있는 visible을 처리해야하는데...
    const { visible } = this.props;
    const { onCancel } = this;
    console.log('visible', visible);

    return (
      <CreateFolderModal 
        visible={visible}
        onCancel={onCancel}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // immutable JS에 대한 내용 익히기!
  const visible = state.common.getIn(['folderModal','visible']);
  return {visible: visible}
};

const mapDispatchToProps = (dispatch) => ({
  CommonAction: bindActionCreators(commonActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateFolderModalContainer);