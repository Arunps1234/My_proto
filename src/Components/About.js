import React from 'react'
import myimage from "./Assets/Myimage.png"
import Thankyou from "./Assets/Thankyou.png"
import "./About.css"

const About = () =>{
    return(
        
        <div className='container'>
            <br/> <br/><br/>
            <div className='myimage'>
                <img src={myimage} className='image' alt="My_image"/>
            </div>
            <br/>
Hello, I'm <span style={{color:"green", fontWeight:700}}>Aruan P S </span>, a Bachelor of Engineering graduate with a passion for continuous learning and exploration. I find joy in diving into the worlds created by books, exploring new landscapes through riding, and embarking on adventures while traveling. My curiosity drives me to seek out new experiences and knowledge, making every day an opportunity for growth and discovery.
<br/><br/>
<div>
I take pride in my ability to empathize with others and understand their pains, striving to offer support and kindness wherever I can.


</div>

<br/> 
<div>
My goal is to improve my knowledge every day, constantly seeking to learn new things and expand my understanding of the world.
</div>

<div style={{display:"flex", justifyContent:"center", color:"green"}}>
    <img src={Thankyou} alt="Thankyou_image" style={{width:"300px", height:"300px"}} />
</div>
</div>
    )
    
}

export default About