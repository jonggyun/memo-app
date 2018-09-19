import React from 'react';
import MemoTemplate from 'components/memo/MemoTemplate';
import MemoHeader from 'components/memo/MemoHeader';
import MemoFolder from 'components/memo/MemoFolder';
import MemoList from 'components/memo/MemoList';
import MemoContent from 'components/memo/MemoContent';

const MemoPage = () => {
  return (
    <div>
      <MemoTemplate 
        header = {<MemoHeader />}
        folder = {<MemoFolder />}
        list = {<MemoList />}
        content = {<MemoContent />}
      />
    </div>
  )
}

export default MemoPage;