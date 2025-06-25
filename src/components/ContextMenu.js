import React from 'react'

const ContextMenu = ({x,y,onClose,onCreateFolder, onCreateFile, onRename , onDelete}) => {
  return (
    <div
    className='context-menu'
    style={{ top: y, left: x }}
    onClick={(e) => e.stopPropagation()}>
        <button onClick={onCreateFolder}>New Folder</button>
        <button onClick={onCreateFile}>New File</button>
        <button onClick={onRename}>Rename</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
          
    </div>
  )
}

export default ContextMenu
