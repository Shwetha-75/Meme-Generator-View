import React from 'react'
import styled from 'styled-components'
import SelectedImage from '../MemeComponent/SelectedImage';
import "./uploadComponent.css";

const Button = styled.div`
  
`

export default function UploadImageComponent() {

    const {setSelectedImage}=React.useContext(SelectedImage);
    
  return (
      <>
      <div className=' download--tag--upload--image h-[100%] relative flex justify-center items-center w-[30%]'>
        <span className='absolute'>
          Upload Image
        </span>
      <input 
      type="file"
      className="w-[100%]"
      onChange={(e)=>{
        const file=e.target.files[0];
        if(file){
          const blobUrl=URL.createObjectURL(file)
          setSelectedImage({
            image:blobUrl
          });
          
        }
      }}
      
      />
      </div>
          
       
      </>
  )
}
