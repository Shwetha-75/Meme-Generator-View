import styled from "styled-components"
import AddTag from "../AddTextBoxComponent/AddTag"
import SearchMenuBarComponent from "../SearchMenuBarComponent/SearchMenuBarComponent"
import "./AddMenuBar.css";
import AddLogo from "../AddLogo/AddLogo";
import  AddTextBoxEditOptions from "./AddTextBoxEditOptions";
import AddLogoEditOptions from "./AddLogoEditOptions";
const Container = styled.div`
     display:flex;
     flex-direction:column;
     margin-top:-30px;
`
const Panel = styled.div`
    
`
export default function AddMenuBar({handleOnClick,handleOnAddLogo}) {
      
 

  return (
    <Container  className=" w-[100%] flex flex-col gap-[1.2rem]">
      <Panel  className="">
       {/* <SearchMenuBarComponent/> */}
       <h1 className="text-center menu--bar--title">Menu Bar</h1>
        </Panel>
       <Panel  className='w-[100%] options--tag--menu--bar flex flex-col gap-[0.6rem]'>
      
        <Panel
        className='w-[98%]'>
        <AddTag
           handleOnClick={handleOnClick}  />
        </Panel>

          <Panel className='w-[98%] flex flex-col justify-center items-center'>
             <AddTextBoxEditOptions/>
          </Panel>
          <Panel className="h-[1.3px] mt-[5%] w-[98%] bg-slate-500"></Panel>
        <Panel 
        className='w-[98%] mt-[5%]'>
        <AddLogo
        handleOnAddLogo={handleOnAddLogo}
     
        />
        </Panel>
        
        <Panel  className='w-[98%]'>
             <AddLogoEditOptions/>
         </Panel>
 
        </Panel> 

    </Container>
  )
}
