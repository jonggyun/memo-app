import React from 'react';
import MemoTemplate from 'components/memo/MemoTemplate';
import MemoFolder from 'components/memo/MemoFolder';
import MemoList from 'components/memo/MemoList';

const MemoPage = () => {
  return (
    <div>
      <MemoTemplate 
        folder = {<MemoFolder />}
        list = {<MemoList />}
      />
    </div>
  )
}

export default MemoPage;