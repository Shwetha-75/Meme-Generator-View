import React from 'react';
import styled from "styled-components";
import ImageTagEditable from "./ImageTagEditable";
import Data from "./Data";
import PreviewButton from "../PreviewComponent/PreviewButton";
import AddMenuBar from "../AddMenuBarComponent/AddMenuBar"
import ConstraintsRef from "./ConstraintsRef";
import DownloadButton from "../DownloadComponent/DownloadButton";
import PictureStatus from "./PictureStatus";
import DataImageTag from "../DataImageTag";
import Logo from './Logo';
import UploadImageComponent from "../UploadImageComponent/UploadImageComponent"
import TakingScreenShoot from '../ContextApi/TakingScreenShoot';
import EditLogoColor from './EditLogoColor';
import SelectedTag from './SelectedTag';
import PreviewDisplayComponent from '../PreviewDisplayComponent/PreviewDisplayComponent';
import PreviewImage from '../ContextApi/PreviewImage';
import DisplayTheImage from "../ContextApi/DisplayTheImage";
import html2canvas from 'html2canvas';

const Container = styled.div`
    display:flex;
    gap:2rem;
    
`
const Panel = styled.div`
      flex:${props => props.weight}
`

const Item = styled.div`


`
export default function EditMemeMain() {


  const [data, setData] = React.useState(() => {
    let temp = sessionStorage.getItem('data');
    return temp ? JSON.parse(temp) : []
  });
  const [pictureStatus, setPictureStatus] = React.useState(true);
  const [previewImage, setPreviewImage] = React.useState(true);
  const constraintsRef = React.useRef(null);
  const [selectedTag, setSelectedTag] = React.useState('');
  const [editLogoColor, setEditLogoColor] = React.useState('black');
  const [dataImageTag, setDataImageTag] = React.useState([])
  const [logo,setLogo] = React.useState('');
  const [poppUpDisplay, setPoppUpDisplay] = React.useState(false);
  const [displayTheImage,setDisplayTheImage]=React.useState('');
  const [takingScreenShot,setTakingScreenShot]=React.useState('');
  // creating the text box
  const handleOnClick = (updatedData) => {
    setData(prev => {

      return [...prev, {...updatedData }]
    });
  }

  const handleOnAddLogo = (updatedData) => {
    setDataImageTag([
      ...dataImageTag,
      { ...updatedData }
    ])
  }

  React.useEffect(() => {
    sessionStorage.setItem('data', JSON.stringify(data))
    sessionStorage.setItem('poppUpDisplay', JSON.stringify(poppUpDisplay))
  })

  const handleOnClickDisplay = async() => {

    setPoppUpDisplay(prev =>!prev)
    setPictureStatus(false);
    setTakingScreenShot('screenshot')
    
  };
  React.useEffect(()=>{
    (async function(){

      if(pictureStatus===false && takingScreenShot==='screenshot'){
        const imageCanvas = await html2canvas(constraintsRef.current,{
       useCORS:true
       
      });
      
      setDisplayTheImage(imageCanvas.toDataURL('image/png'))
    }
  })()
  },[pictureStatus,takingScreenShot,setDisplayTheImage])

  const handleOnClose=()=>{
      // setPreviewImage(prev=>!prev);
      setPictureStatus(true);
      setPoppUpDisplay(prev =>!prev);
      setTakingScreenShot("")
  }

  return (
   <TakingScreenShoot.Provider value={{takingScreenShot,setTakingScreenShot}}>
   <PictureStatus.Provider value={{ pictureStatus, setPictureStatus }}>
   <ConstraintsRef.Provider value={{ constraintsRef }}>
        <DisplayTheImage.Provider value={{displayTheImage,setDisplayTheImage}}>
        <Data.Provider value={{ data, setData }}>
          <SelectedTag.Provider value={{ selectedTag, setSelectedTag }}>
            <DataImageTag.Provider value={{ dataImageTag, setDataImageTag }}>
              <Logo.Provider value={{ logo, setLogo }}>
                <EditLogoColor.Provider value={{ editLogoColor, setEditLogoColor }}>
                <PreviewImage.Provider value={{ previewImage, setPreviewImage }}>
                    <Container className=' h-[100%] w-[100%] relative'>
                      <Panel weight={3} className="container---tag--meu--bar  w-[100%] h-[100%]">
                        <AddMenuBar
                          handleOnClick={handleOnClick}
                          handleOnAddLogo={handleOnAddLogo}
                          />
                      </Panel>
                      <Panel className="w-[2px] bg-slate-800 h-[100%] "></Panel>
                      <Panel weight={5} className="gap-[2rem] flex flex-col justify-center items-center">
                        <Panel className=" h-[80%] border border-slate-800 rounded-sm">
                          <ImageTagEditable
                            pictureStatus={pictureStatus}
                            />
                        </Panel>
                        <Panel weight={1} className="p-2 w-[95%] h-[20%] flex justify-evenly items-center">
                          <DownloadButton />
                          <UploadImageComponent/>
                          <PreviewButton
                          onClick={handleOnClickDisplay}
                          />
                        </Panel>
                        </Panel>
                      {poppUpDisplay && <Panel className={``}>
                        <Item className={`preview--image--tag flex flex-row justify-center items-center`}>
                          <div className='h-[80vh] w-[60%] poppup--display--tag '>
                            <PreviewDisplayComponent
                              onClick={handleOnClose}
                            />
                          </div>
                        </Item>
                      </Panel>}
                    </Container>
                    </PreviewImage.Provider>
                    </EditLogoColor.Provider>
              </Logo.Provider>
            </DataImageTag.Provider>
          </SelectedTag.Provider>
          </Data.Provider>
          </DisplayTheImage.Provider>
          </ConstraintsRef.Provider>
          </PictureStatus.Provider>
        </TakingScreenShoot.Provider>

  )
}
