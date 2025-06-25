import React , {useState} from 'react';
import FolderItem from './FolderItem';
import FileItem from './FileItem';
import FlieViewer from './FlieViewer';
import Toolbar from './Toolbar';
import '../styles/FileExplorer.css';

// FileExplorer component to manage the file and folder structure


const FileExplorer = ({fileSystem,setFileSystem,currentFile,setCurrentFile}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleContextMenu = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    setContextMenu({ x: e.clientX, y: e.clientY });
    };
    const closeContextMenu = () => {
    setContextMenu(null);   
    };

    const handleCreate = (type) => {
        const name = prompt(`Enter name for new ${type}:`);
        if (!name) return;
        const newItem = {
            id: Date.now().toString(),
            name,
            type,
            ...(type === 'folder' 
                ? { children: [] } 
                : { extension: name.includes('.') ? name.split('.').pop() : 'txt' })
        };

        if (!selectedItem || selectedItem.type !== 'folder') {
            setFileSystem(prevFileSystem => ({
                ...prevFileSystem,
                children: [...(prevFileSystem.children || []), newItem]
            }));
            closeContextMenu();
            return;
        }

        const UpdateFileSystem = (node) => {
            if(node.id === selectedItem?.id && node.type === 'folder') {
                return{
                    ...node,
                    children: [...(node.children || []), newItem]   
                };
            }
            if (node.children) {
                return {
                    ...node,
                    children: node.children.map(UpdateFileSystem)
                };
            }
            return node;
        };
        setFileSystem(UpdateFileSystem(fileSystem));
        closeContextMenu();
    };
  
    const handleDelete = () => {
        if (!selectedItem) return;

       if(!window.confirm(`Are you sure you want to delete ${selectedItem.name}?`)) {
            return;
        }
        const UpdateFileSystem = (node) => {
            if(node.children){
                const filteredChildren = node.children.filter(child => child.id !== selectedItem.id).map(UpdateFileSystem);
                return {
                    ...node,
                    children: filteredChildren
                };
            }
            return node;
        };
        setFileSystem(UpdateFileSystem(fileSystem));
        setSelectedItem(null);
    closeContextMenu();
    };
    const handleRename = () => {
        if (!selectedItem) return;
        const newName = prompt('Enter new name:', selectedItem.name);
        if(!newName || newName === selectedItem.name) return;
        const UpdateFileSystem = (node) => {
            if(node.id === selectedItem.id) {
                const updatedNode = { ...node, name: newName };
                if (node.type === 'file') {
                    const nameParts = newName.split('.');
                    updatedNode.extension = nameParts.length > 1 ? nameParts.pop() : 'txt';
                }
                return updatedNode;
            }
            if (node.children) {
                return {
                    ...node,
                    children: node.children.map(UpdateFileSystem)
                };
            }
            return node;
        };
        setFileSystem(UpdateFileSystem(fileSystem));
        closeContextMenu();
    };

     const renderTree=(node, depth=0)=>{
        if (node.type === 'folder') {
            const childrenContainMatch = node.children && node.children.some(child => {
                // We need to check if any descendant matches, not just immediate children.
                // A simple way is to see if rendering the child subtree results in something.
                return renderTree(child, depth + 1) !== null;
            });

            if (!childrenContainMatch && searchQuery && !node.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return null;
            }

            return (
                <FolderItem 
                    key={node.id} 
                    folder={node} 
                    depth={depth} 
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    handleContextMenu={handleContextMenu}
                    setCurrentFile={setCurrentFile}
                    renderTree={renderTree}
                />
            );
        }
        else { // It's a file
            if(searchQuery && !node.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return null;
            }
            return (
                <FileItem 
                    key={node.id} 
                    file={node} 
                    depth={depth} 
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    setCurrentFile={setCurrentFile}
                    handleContextMenu={handleContextMenu}
                />
            );
        }
     };
     return(
        <div className="file-explorer" onClick={closeContextMenu}>

        <Toolbar
         onCreateFolder={() => handleCreate('folder')}
         onCreateFile={() => handleCreate('file')} 
            onDelete={handleDelete}
            onRename={handleRename}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />
        <div className='explorer-container'>
            <div className='tree-view'>
                {renderTree(fileSystem)}
        </div>
        <div className='content-view'>
            {currentFile ?(
                <FlieViewer file={currentFile} />
            ) : (
                <div className='enpty-view'>
                    Select a file to view its content</div>
            )}
  </div>

        </div>

{contextMenu && (
    <div 
    className='context-menu'
    style={{ top: contextMenu.y, left: contextMenu.x }}
    onClick={(e)=>e.stopPropagation()}>
        <button onClick={() => handleCreate('folder')}>New Folder</button>
        <button onClick={() => handleCreate('file')}>New File</button> 
        <button onClick={handleRename}>Rename</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
)}
    
            </div>
        );
    };



export default FileExplorer
