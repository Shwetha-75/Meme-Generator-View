import styled from "styled-components";
import { createFileName, useScreenshot } from 'use-react-screenshot';
import PictureStatus from "../EditMemeComponent/PictureStatus";
import ConstraintsRef from "../EditMemeComponent/ConstraintsRef";
import React from "react";
import "./downloadButton.css"
import TakingScreenShoot from "../ContextApi/TakingScreenShoot";
// import PreviewImage from "../ContextApi/PreviewImage";
const Button = styled.button`
    
`

export default function DownloadButton() {
   
  const {constraintsRef} = React.useContext(ConstraintsRef);

  const{takingScreenShot} = React.useContext(TakingScreenShoot);
  const {pictureStatus,setPictureStatus} = React.useContext(PictureStatus);
   
//   const {previewImage}=React.useContext(PreviewImage);
    
 

  const handleDownload=()=>{
      setPictureStatus(false);
  }    
  
  const [image,takeScreenShot]=useScreenshot({
    type:"image/jpeg",
    quality:1.0
   })
   
   
   
  React.useEffect(()=>{
      if(pictureStatus===false && takingScreenShot!=='screenshot'){
          const download=(image,{name="img",extension="jpg"}={})=>{
                const a=document.createElement("a");
                a.href=image;
                a.download=createFileName(extension,name);
                a.click();
          }; 
          takeScreenShot(constraintsRef?.current)?.then(download);
          setPictureStatus(true);
      }
  },[pictureStatus,setPictureStatus,takeScreenShot,constraintsRef,takingScreenShot])

  return (
    <Button className="download--btn--tag w-[30%] h-[100%]" onClick={handleDownload}>
       Download
    </Button>
  )
}
