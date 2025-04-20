import React,{useState} from 'react'

export default function About() {
    const [Mystyle , Setstyle] = useState({
        color: 'black',
        backgroundColor: 'white'
        
    })
    const [btntext , setbtntext] = useState("Enable Dark Mood");


   const hendelchnage = ()=>{
        
        // eslint-disable-next-line eqeqeq
        if(Mystyle.color === 'black'){
            Setstyle({
                color: 'white',
                backgroundColor: 'black',
        border: '1px solid white'
            })
            setbtntext("Enable Light Mood")
        }
        else{
            Setstyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable Dark Mood")
        }
    }

    

    
    
  return (
    <div className='containe' style={Mystyle}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={Mystyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={Mystyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={Mystyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={Mystyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
</div>
<div className="constaine my-3">
<button type="button" onClick={hendelchnage} className="btn btn-primary">{btntext}</button>
{/* <button type="button" onClick={togglestyle} class="btn btn-primary">Enable Dark Mood</button> */}
</div>


    </div>
  )
}
