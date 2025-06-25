import React from 'react'
import FileIcon from "../assets/FileIcon.png"
import ImageIcon from "../assets/picture.png"
import Documentation from "../assets/documents.png"

const FileItem = ({
    file,
    depth,
    selectedItem,
    setSelectedItem,
    setCurrentFile,
    handleContextMenu
}) => {
  const getFileIcon = () => {
    if(['jpg', 'jpeg', 'png', 'gif'].includes(file.extension)) {
      return ImageIcon;
    }
    if(['pdf', 'doc', 'docx', 'txt'].includes(file.extension)) {
      return Documentation;
    }
    return FileIcon;
  };
  const handleClick = (e) => {
    e.stopPropagation();
    setSelectedItem(file);
    setCurrentFile(file);
  };

  return(
    <div
      className={`file-item ${selectedItem?.id === file.id ? 'selected' : ''}`}
      style={{ paddingLeft: `${depth * 15}px` }}
      onClick={handleClick}
      onContextMenu={(e) => handleContextMenu(e, file)}
    >
      <img
        src={getFileIcon()}
        alt="File Icon"
        className='file-icon'/>
      <span>{file.name}</span>
    </div>
  );
};

export default FileItem
