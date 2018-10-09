import React from 'react';
import MemoTemplate from 'components/memo/MemoTemplate';
import FolderList from 'components/folders/FolderList';
import MemoListContainer from 'containers/memo/MemoListContainer';

const MemoPage = ({history}) => {
  return (
    <div>
      <MemoTemplate 
        folderList={<FolderList />}
        memoList={<MemoListContainer />}
        history={history}
      />
    </div>
  )
}

export default MemoPage;