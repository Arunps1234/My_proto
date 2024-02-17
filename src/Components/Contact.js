import React from 'react'
import { FaGithub } from "react-icons/fa6";
import github from "./Assets/Github.png"


const Contact = () =>{
    return(

        <div style={{fontWeight:"700"}}>

<br/><br/>

            <div className='address' style={{display:"flex", justifyContent:"center"}}>
                S/O SwamyGowda <br/>
                Poonadahalli Village and Post <br/>
                Periyapatna Taluk <br/>
                Mysore District <br/>
                Karnataka - 571107
            </div>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            Email :<span > gowdaaru1999@gmail.com </span><br/>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            Phone :<span > 7676345521 </span><br/>
            </div>
            <br/><br/>

        </div>

<div style={{display:"flex", justifyContent:"center"}}>
<a href="https://github.com/Arunps1234" target='_blank' >

<FaGithub style={{color:"black", width:"100px", height:"100px"}}/>
</a>
            
</div>
        </div>
    )
    
}

export default Contact