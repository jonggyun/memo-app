import React, { Component } from 'react';
import Folders from 'components/folders/Folders';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as folderListAction from 'store/modules/fList';

/**
 * Folders에 폴더 리스트 데이터를 뿌려주기.
 */
class FoldersContainer extends Component {

  getFolderList = () => {
    const { ListActions } = this.props;
    ListActions.getFolderList();
  }

  componentDidMount() {
    // 컴포넌트가 처음 마운트 될때 내용을 불러온다.
    this.getFolderList();
  }

  render() {
    // 여기서 폴더 리스트를 받아와야함!!!
    const { folders } = this.props;
    if (folders === undefined) return null;
    return (
      <div>
        <Folders folders={folders}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    name: state.name
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(folderListAction, dispatch)
  })
)(FoldersContainer);