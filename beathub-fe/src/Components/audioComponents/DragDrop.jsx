import React, { useRef } from 'react';
import { FileDrop } from 'react-file-drop';
import { Text } from '@chakra-ui/react';
import './DragDrop.css';

function DragDrop() {
  const fileInputRef = useRef(null);

  const onFileInputChange = (event) => {
    const { files } = event.target;
    // do something with your files...
  }

  const onTargetClick = () => {
    fileInputRef.current.click()
  }

  const fileHandler = (event) => {
    alert(event);
  }

  return (
  <>
    <FileDrop className='file-drag-drop'
        onTargetClick={onTargetClick} onDrop={(f) => fileHandler(f)}>
            <span>
                <Text><b><span className='highlight'>Drag</span> or <span className='highlight'>click</span> to upload!</b></Text>
                <input
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    type="file"
                    className="file-drop"
                />
            </span>
        </FileDrop>
    </>
  )
}

export default DragDrop;