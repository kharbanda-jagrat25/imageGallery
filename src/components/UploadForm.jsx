import React, { useState } from 'react';
import '../styles/uploadForm.scss';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const types = ['image/png', 'image/jpeg'];

  const handleChange = e => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setError('');
      setFile(selected);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">
          { error }
        </div>}
        { file && <div className="show-file">
          { file.name }
        </div>}
        { file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm;
