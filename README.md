# MyNewApp123x

A simple React-based file explorer that allows you to browse, view, and manage a virtual file system with support for basic file operations.

---

## Features

- **File & Folder Tree:** Browse a hierarchical file/folder structure.
- **Icons:** Displays appropriate icons for folders, documents, images, and generic files.
- **File Viewer:** Open and view file contents (text, images, etc.).
- **Context Menu & Toolbar:** Create, rename, and delete files/folders.
- **Responsive UI:** Click to select, right-click for context menu, and more.

---

## Folder Structure

myapp/
│
├── public/ # Static assets and HTML template
│ └── ...
│
├── src/
│ ├── assets/ # Icons and images
│ │ ├── documents.png
│ │ ├── FileIcon.png
│ │ └── picture.png
│ │
│ ├── components/ # React components
│ │ ├── ContextMenu.js # (Optional) Context menu for file/folder actions
│ │ ├── FileExplorer.js # Main file explorer logic and state
│ │ ├── FileItem.js # Renders a single file with icon
│ │ ├── FlieViewer.js # Displays file content
│ │ ├── FolderItem.js # Renders a single folder with icon and children
│ │ └── Toolbar.js # Toolbar for quick actions (create, search, etc.)
│ │
│ ├── styles/ # CSS files
│ │ ├── App.css
│ │ └── FileExplorer.css
│ │
│ ├── App.js # Main app component, sets up initial file system
│ ├── index.js # Entry point
│ └── ... # Other standard React files
│
├── package.json
└── README.md

---

## Main Components & Functions

### `App.js`
- Initializes the mock file system.
- Holds main state: `fileSystem` and `currentFile`.
- Renders the `FileExplorer` component.

### `FileExplorer.js`
- Manages the file/folder tree, selection, and context menu.
- Handles file/folder creation, renaming, and deletion.
- Renders the tree using `FolderItem` and `FileItem`.
- Passes selected file to `FlieViewer` for viewing.

### `FolderItem.js`
- Renders a folder with an icon.
- Handles expand/collapse and selection.
- Recursively renders child files/folders.

### `FileItem.js`
- Renders a file with an icon based on its extension.
- Handles selection and opening for viewing.

### `FlieViewer.js`
- Displays the content of the selected file.
- Supports text and image preview; shows a message for unsupported types.

### `Toolbar.js`
- Provides buttons for creating files/folders, deleting, renaming, and searching.

---

## How to Use

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Using the App:**
   - **Browse:** Click folders to expand/collapse. Click files to view their content.
   - **Create:** Use the toolbar or right-click context menu to add new files or folders.
   - **Rename/Delete:** Select an item and use the toolbar or context menu.
   - **View:** Selected file content appears in the right pane.

---

## Customization

- **Add More File Types:** Update the icon logic in `FileItem.js` and content handling in `FlieViewer.js`.
- **Persist Data:** Integrate with a backend or local storage for real file management.

---

## License

MIT

---

## Author

Shashank Kushwaha
shashankkushwaha123@gmail.com
