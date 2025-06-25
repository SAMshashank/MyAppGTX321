import React from 'react'

const Toolbar = ({
    onCreateFolder,
    onCreateFile,
    onDelete,
    onRename,
    searchQuery,
    setSearchQuery

}) => {
  return (
   <div className='toolbar'>
    <div className='toolbar-actions'>
        <button onClick={onCreateFolder}>Create Folder</button>
        <button onClick={onCreateFile}>Create File</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onRename}>Rename</button>
        </div>
        <div className='search-box'>
        <input 
            type='text' 
            placeholder='Search...' 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    </div>
    );
};

export default Toolbar
