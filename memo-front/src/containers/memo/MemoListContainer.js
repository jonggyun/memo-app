import React, { Component } from 'react';
import MemoList from 'components/memo/MemoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MemoListContainer extends Component {
  render() {
    const { memoList } = this.props;
    return (
      <div>
        <MemoList 
          memoList={memoList}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  memoList: state.memo.memoList
});

const mapDispatchToProps = (state) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoListContainer);