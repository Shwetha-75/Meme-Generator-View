// import ImageTagEditable from "../EditMemeComponent/ImageTagEditable";
import "./previewdisplaycomponent.css";
// import PreviewImage from "../ContextApi/PreviewImage";
import DisplayTheImage from "../ContextApi/DisplayTheImage";
import React from "react";
export default function PreviewDisplayComponent({onClick}) {
  
//  const {previewImage,setPreviewImage}=React.useContext(PreviewImage);
  const {displayTheImage}=React.useContext(DisplayTheImage);
  return (
    <div className="border border-slate-800 w-[100%]  h-[100%]  flex flex-col justify-between items-center p-4   ">
        <div className="w-[95%] h-[80%] border border-slate-800 ">
         <img
          src={displayTheImage}
          alt=""
          className="h-full w-full"
       />
        </div>
        
        <div onClick={onClick} className='rounded-lg w-[60%] border border-slate-800 text-center p-4 cursor-pointer close--poppup--tag'>
          close
        </div>
    </div>
  )
}
