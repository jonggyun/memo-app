import React, { Component } from 'react';
import MemoList from 'components/memo/MemoList';
import MemoHeader from 'components/memo/MemoHeader';
import { connect } from 'react-redux';

class MemoListContainer extends Component {
  render() {
    const { memos } = this.props;
    console.log('memos: ', memos);
    if(memos === null) return null;

    return (
      <div>
        <MemoHeader title={memos.name} />
        <MemoList memoList={memos.memolist} />  
       </div>
    )
  }
}

const mapStateToProps = (state) => ({
  memos: state.memo.memoList
});

// const mapDispatchToProps = (state) => {

// };

export default connect(
  mapStateToProps
)(MemoListContainer);