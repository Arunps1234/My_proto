import React from 'react'
import thankyou from "./Assets/thankyou2.png"

const Skill = () =>{
    return(
<div className='container' >
    <div className='frontend' style={{border:"2px solid green", padding:"10px", margin:"10px"}}>
       <span style={{fontWeight:"700", color:"green"}}>Frontend Technologies: </span> <br/>
        1. HTML <br/>
        2. CSS <br/>
        3. Javascript <br/>
        4. React <br/>
        5. Redux <br/>
    </div>
<br/>

    <div className='backend' style={{border:"2px solid green", padding:"10px", margin:"10px"}}>
       <span style={{fontWeight:"700", color:"green"}}>Backend Technologies: </span> <br/>
        1. Node <br/>
        2. Express <br/>
        3. MongoDB <br/>
         
    </div>
    
<div style={{display:"flex", justifyContent:"center"}}>
    <img src={thankyou} style={{borderRadius:"50%", width:"200px", height:"200px"}} />
</div>

</div>
    )
    
}

export default Skill