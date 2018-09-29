import React from 'react';
import MemoTemplate from 'components/memo/MemoTemplate';
import FolderList from 'components/folders/FolderList';
import MemoList from 'components/memo/MemoList';

const MemoPage = ({history}) => {
  return (
    <div>
      <MemoTemplate 
        folderList={<FolderList />}
        memoList={<MemoList />}
        history={history}
      />
    </div>
  )
}

export default MemoPage;