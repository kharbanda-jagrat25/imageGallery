import React, { useState } from 'react'
import Title from './components/Title'
import UploadForm from './components/UploadForm'
import ImageGrid from './components/ImageGrid'
import ViewPic from './components/ViewPic'

function App() {
  const [selectedImg, setSelectedImg] = useState('');

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <ViewPic selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;