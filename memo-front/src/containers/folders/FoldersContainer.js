import React, { Component } from 'react';
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
    const folders = this.props.folders;
    console.log('thisprops.', folders);
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps1', state);
  return ({
    folders : state.folders
  })
};

const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps');
  return ({
  getFolderList: bindActionCreators(folderListAction.getFList, dispatch)
})
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersContainer);