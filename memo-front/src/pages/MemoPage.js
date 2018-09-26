import React from 'react';
import MemoTemplate from 'components/memo/MemoTemplate';
import FolderList from 'components/folders/FolderList';
import MemoList from 'components/memo/MemoList';

const MemoPage = () => {
  return (
    <div>
      <MemoTemplate 
        folderList = {<FolderList />}
        memoList = {<MemoList />}
      />
    </div>
  )
}

export default MemoPage;