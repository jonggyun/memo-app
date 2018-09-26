import React, { Component } from 'react';
import CreateFolderModal from 'components/modal/CreateFolderModal';

class CreateFolderModalContainer extends Component {
  render() {
    const visible = 'true';

    return (
      <CreateFolderModal 
        visible={visible}
      />
    );
  }
}

export default CreateFolderModalContainer;