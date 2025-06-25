import React, {useState} from "react";
import FileExplorer from "./components/FileExplorer";
import "./styles/App.css";
// import { type } from "@testing-library/user-event/dist/type";

// making mock data

const initialFileSystem={
  id: 'root',
  name: 'Root',
  type: 'folder',
  children:[
    {
      id: 'documents',
      name: 'Documents',
      type: 'folder',
      children:[
        {id:'doc1',name:'Report.docx',type:'file', extension:'docx'},
        {id:'doc2',name:'Presentation.pdf',type:'file', extension:'pdf'},
      ]
    },
    {
      id:'projects',
      name:'Projects',
      type:'folder',
      children:[
        {
          id:'project1',
          name :'Website',
          type:'folder',
          children:[
            {id:'index',name:'index.html',type:'file', extension:'html'},
            {id:'style',name:'style.css',type:'file', extension:'css'},
          ]
        }
      ]
    }

  ]
};


function App() {
//main function 

const [fileSystem, setFileSystem] = useState(initialFileSystem);
const [currentFile, setCurrentFile] = useState(null);

  return (
    <div className="App">
      <FileExplorer 
      fileSystem={fileSystem}
      setFileSystem={setFileSystem}
      currentFile={currentFile}
      setCurrentFile={setCurrentFile}
      />
     
    </div>
  );
}

export default App;
