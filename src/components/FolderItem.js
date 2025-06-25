import React, {useState} from 'react'
import FolderIcon from '../assets/documents.png'

const FolderItem = ({
    folder,
    depth,
    selectedItem,
    setSelectedItem,
    setCurrentFile,
    handleContextMenu,
    renderTree
}) => {
 
    const [expanded, setExpanded] = useState(true);
    const handleClick = (e) => {
        e.stopPropagation();
        setSelectedItem(folder);
        setCurrentFile(null);
        setExpanded((prev) => !prev);
    };

    if (!folder) {
        return null;
    }

    return (
        <div 
            className={`folder-item ${selectedItem?.id === folder.id ? 'selected' : ''}`}
            style={{ paddingLeft: `${depth * 15}px` }}
            onClick={handleClick}
            onContextMenu={(e) => handleContextMenu(e, folder)}
        >
            <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
            <span>{folder.name}</span>
            {expanded && folder.children && (
                <div className="folder-contents">
                    {folder.children.map(child => renderTree(child, depth + 1))}
                </div>
            )}
            
        </div>
    );
}

export default FolderItem;
