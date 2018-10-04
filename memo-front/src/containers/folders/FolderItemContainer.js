import React, { Component } from 'react';
import FolderItem from 'components/folders/FolderItem';
import { connect } from 'react-redux';

class FolderItemContainer extends Component {
  
  onAddMemo = () => {
    // 메모 추가는 페이지를 별도로 구성하자
    const { id } = this.props;
    alert('add MemoButton')
    console.log('##################', id);
  }

  render() {
    const { _id, name, onSelect } = this.props;
    const { onAddMemo } = this;
    return (
      <div>
        <FolderItem
          id={_id}
          name={name}
          onSelect={onSelect}
          onAddMemo={onAddMemo}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.folder.get('id'),
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderItemContainer);