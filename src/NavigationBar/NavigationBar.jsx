// import React from "react";
import styled from "styled-components";
// import { UserStatus } from '../App';

const Container = styled.div`
   display:flex;
   flex-direction:row;
    width:98%;
   align-items:center;
`
const Panel = styled.div`
   flex:${props=>props.weight}
`
export default function NavigationBar() {
   //   const {setUserStatus} = React.useContext(UserStatus);
  return (
    <Container className="justify-between p-2 shadow-xl" >
        <Panel className="p-6 w-[20%] ">
           <h1  className="flex text-white text-[1.5rem] font-bold place-content-evenly ">
            <span className=""
            style={{
            color:'slategray'
           }}
            >

            <span 
           className="text-[2.5rem] "
           style={{
              fontFamily:'oblique',
              color:'white'
           }}
           >M</span>eme 
           </span>

           <span className=""
           style={{
            color:'slategray'
           }}
           >

           <span
           className="text-[2.5rem]"
           style={{
              fontFamily:'oblique',
              color:'white'
            }}
           >G</span>
           enerator
            </span>
           </h1>


        </Panel>
        {/* <Panel className="p-8 w-[30%] ">
            <h1 className="text-white text-[1.2rem] cursor-pointer text-end"
            onClick={()=>setUserStatus(prev=>!prev)}
            >Logout</h1>
        </Panel> */}
    </Container>
  )
}
