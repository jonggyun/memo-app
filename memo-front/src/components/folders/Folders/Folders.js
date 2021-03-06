import React from 'react';
import FolderItemContainer from 'containers/folders/FolderItemContainer';

// db에 저장된 폴더들을 가져와서 뿌리는 역할을 해야한다.
const Folders = ({folders, onSelect}) => {
  const folderList = folders.map(
    (folder) => {
      const { _id, name } = folder;
      return (
        <FolderItemContainer 
          _id={_id}
          key={_id}
          name={name}
          onSelect={onSelect}
        />
      )
    }
  );
  return (
    <div>
      {folderList}
    </div>
  )
};

export default Folders;