import React, { Component } from 'react';
import FolderItem from 'components/folders/FolderItem';
import { connect } from 'react-redux';

class FolderItemContainer extends Component {

  onAddMemo = (id) => {
    // 여기서 메모추가하는 화면으로 전환하기.
  }

  // 업데이트 조건 걸기
  shouldComponentUpdate(nextProps, nextState) {
    return this.props._id === nextProps.id;
  }

  render() {
    const { _id, name, onSelect, selected } = this.props;
    const { onAddMemo } = this; 
    return (
      <div>
        <FolderItem
          id={_id}
          name={name}
          onSelect={onSelect}
          onAddMemo={onAddMemo}
          selected={selected}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.folder.get('id'),
  selected: state.folder.get('selected'),
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderItemContainer);