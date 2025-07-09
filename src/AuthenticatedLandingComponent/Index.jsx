import styled from 'styled-components';
import Main from "./Main";
import Footer from "../FooterComponent/Footer";
import "./auth.css";
import React from "react";
import PoppupComponentRegister from '../PoppupComponentRegisterlogin/PoppupComponentRegister';

const Container = styled.div`
     

`
const Panel = styled.div`
     
`

export default function Index() {

  return (
    <>
    <Container className="border p-2 flex flex-col gap-[2rem]">

      {/* <Panel className="border border-red-500 p-2 w-[100%]">

      </Panel> */}

       <Panel className="border border-slate-500 w-[100%] h-[100vh]">
           <Main/>
       </Panel>
{/* 
       <Panel className="border border-blue-500 p-2">
        <Footer/>  
       </Panel> */}
     
     {/* <Panel className="h-[50vh] w-[98%] mt-[80px] mb-[10px] flex justify-center items-center">
         
      </Panel> */}
    </Container>
    {/* <div className="container--tag--main">
      </div> */}
   </>
  )
}
