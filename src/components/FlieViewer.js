import React from 'react'

{/*<img
                    src={file.content}
                    alt={file.name}
                    style={{ maxWidth: '60%', maxHeight: '40%' }}
                />  */}
const FlieViewer = ({file}) => {
  if (!file) return null;

  // Simple file content simulation
  if (['jpg', 'jpeg', 'png', 'gif'].includes(file.extension)) {
    if (file.content) {
      return <img src={file.content} alt={file.name} style={{ maxWidth: '100%' }} />;
    } else {
      return <div>No image content available.</div>;
    }
  }
  if (['pdf', 'doc', 'docx'].includes(file.extension)) {
    return <div>Preview not supported for this file type: {file.extension}</div>;
  }
  // For text files
  return (
    <div>
      <h3>{file.name}</h3>
      <pre>{file.content || 'No content available.'}</pre>
    </div>
  );
}

export default FlieViewer
