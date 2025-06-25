import React from 'react'
import PropTypes from 'prop-types';
import pre from "../assets/preview.png"

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
      return <div><img src={ pre} alt={file.name} style={{ maxWidth: '10%' }} /> <p>No image content available.</p></div>;
    }
  }
  if (['pdf', 'doc', 'docx'].includes(file.extension)) {
    return (
      <div>
        <h3>{file.name}</h3>
        <div style={{ color: 'gray' }}>
          Preview not supported for this file type: <b>{file.extension}</b>
        </div>
        <div>
          <a href={file.content || '#'} download={file.name}>
            Download file
          </a>
        </div>
      </div>
    );
  }
  // For text files
  return (
    <div>
      <h3>{file.name}</h3>
      <pre>{file.content || 'No content available.'}</pre>
    </div>
  );
}

FlieViewer.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string,
    extension: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default FlieViewer
