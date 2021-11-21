import React, {FC} from "react";

const PaddingCard:FC<any> = (props) =>{
  console.log(props.children,'11')
  return <div style={{padding:'20px',background:'#fff'}}>
    {/*{props}*/}
    {props.children}
  </div>
}

export default PaddingCard
