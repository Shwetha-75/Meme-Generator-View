import styled from "styled-components";
import "./previous.css";
import React from "react";


const Button = styled.button`
       
`

export default function PreviewButton({onClick}) {


  return (
    <Button 
    
    onClick={onClick} className="previous--btn--tag  h-[100%] w-[30%]"
    
    >
        Preview
    </Button>
  )
}
