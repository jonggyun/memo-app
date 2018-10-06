import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as folderListAction from 'store/modules/folderList'; // 이곳는 리듀서가 정의되어 있다.
import * as folderAction from 'store/modules/folder';
import Folders from 'components/folders/Folders';

/**
 * Folders에 폴더 리스트 데이터를 뿌려주기.
 */
class FoldersContainer extends Component {

  handleSelect = (_id, folderName) => {
    const { FolderAction, selected, id } = this.props;

    // 현재 선택한 아이디와 이전에 선택한 아이디가 다를 경우 이전에 선택했던 아이디의 selected를 풀어줘야한다.

    const param = {
      id: _id,
      folderName: folderName,
      selected: selected === true ? false : true,
    }
    FolderAction.folderInfo(param);
  }

  componentDidMount() {
    this.props.getFolderList();
  }

  componentDidUpdate(prevProps, prevState) {
    const { complete } = this.props;
    if(prevProps.complete !== complete && complete) {
      this.props.getFolderList();
    }
  }

  render() {
    // 여기서 폴더 리스트를 받아와야함!!!
    const folders = this.props.folders;
    const { handleSelect } = this;
    if(folders === undefined) return null;
    return (
      <div>
        <Folders 
          folders={folders}
          onSelect={handleSelect}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    folders : state.folderList.folders, // 컴포넌트의 props를 정의
    complete: state.common.getIn(['folderModal', 'complete']),
    id: state.folder.get('id'),
    selected: state.folder.get('selected'),
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getFolderList: bindActionCreators(folderListAction.getFList, dispatch), // 컴포넌트의 props를 정의
    FolderAction: bindActionCreators(folderAction, dispatch),
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersContainer);