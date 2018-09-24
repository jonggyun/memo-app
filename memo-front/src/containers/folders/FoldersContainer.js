import React, { Component } from 'react';
import Folders from 'components/folders/Folders';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as folderListAction from 'store/modules/folderList';

/**
 * Folders에 폴더 리스트 데이터를 뿌려주기.
 */
class FoldersContainer extends Component {

  componentDidMount() {
    this.props.getFolderList();
  }

  render() {
    // 여기서 폴더 리스트를 받아와야함!!!
    console.log('thisprops.', this.props);
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  folders : state.folders
})

const mapDispatchToProps = (dispatch) => ({
  getFolderList: bindActionCreators(folderListAction.getFList, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersContainer);