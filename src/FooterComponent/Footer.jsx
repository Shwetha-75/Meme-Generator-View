import styled from "styled-components";

const Container = styled.div`
     width:60%;
     display:flex;
     justify-content:center;
     align-items:end;
`

const Panel= styled.div`
    flex:${props=>props.weight}
`

export default function Footer() {
  return (
    <Container className="flex justify-center items-center p-10 h-[30%]">
         <Panel className="cursor-pointer text-center w-[100%]">FeedBack</Panel>
         <Panel className="cursor-pointer text-center w-[100%]">About Us</Panel>
         <Panel className="cursor-pointer text-center w-[100%]">docs</Panel>
         <Panel className="cursor-pointer text-center w-[100%]">Help</Panel>
    </Container>
  )
}
