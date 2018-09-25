import React, { Component } from 'react';
import MemoHeader from 'components/memo/MemoHeader';
import { connect } from 'react-redux';

class MemoHeaderContainer extends Component {

  createContent = () => {
    
  }

  saveContent = () => {
    // 나중에 여기서 type check를 한다음에 폴더, 메모 추가 등등 분기를 태워야한다.

  }

  removeContent = () => {
    alert('removeFolder');
  }

  render() {

    const { createContent, saveContent ,removeContent } = this;
    return (
      <div>
        <MemoHeader 
          onCreate={createContent}
          onSave={saveContent}
          onRemove={removeContent}
        />
      </div>
    );
  }
}

// 컨테이너 컴포넌트에서는 상태값을 가져와서 처리하는 역할을 해야하는 듯.
export default connect(
  (state) => ({
    folderTitle : ""
  })
)(MemoHeaderContainer);