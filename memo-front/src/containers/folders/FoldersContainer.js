import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as folderListAction from 'store/modules/folderList'; // 이곳는 리듀서가 정의되어 있다.
import Folders from 'components/folders/Folders';

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
    if(folders.length === 0) return null;
    return (
      <div>
        <Folders folders={folders}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    folders : state.folderList // 컴포넌트의 props를 정의
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getFolderList: bindActionCreators(folderListAction.getFList, dispatch) // 컴포넌트의 props를 정의
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersContainer);