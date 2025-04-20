import React, {useState} from "react";


export default function Textform(props) {
    const [text , setText] = useState("");

    


    const hendelupclick = ()=>{
        // console.log("upper case was clicked" + text);
        let newtext =  text.toUpperCase();
        setText(newtext);
        props.ShoeAlert("converted to upper case", "success");
        

    }
    const hendelloclick = ()=>{
        let Newtext = text.toLowerCase();
        setText(Newtext);
        props.ShoeAlert("converted to lower case", "success");
    }
    const hendelonchage = (event)=>{
        console.log("on change was clicked")
        setText(event.target.value);
    }
    const hendelclear = ()=>{
        setText("");
        props.ShoeAlert("Text Clear", "success");
    }
    
    // const hendelbycolor = ()=>{
    //     document.body.style.background = "green";
    //     document.body.style.color = "white";
    // }
    const hendelcopy = ()=>{
        var text =document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);

        props.ShoeAlert(" copyed to clipboard!", "success");

    }

    
    // text = "sachin"; this is worng why to change the state values 
    // setText("this is new state value") // this is a right why to change the state values

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>

      <div className="mb-3">
        {/* <label for="mybox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={hendelonchage} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark' ?'white' : 'dark' }} id="mybox" rows="10" ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={hendelupclick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={hendelloclick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={hendelclear}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={hendelcopy}>copy text</button>
      {/* <button className="btn btn-primary mx-1" onClick={hendelbycolor}>Change Outside Color</button> */}
    </div>

    <div className="container my-2">
        <h2> Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Priview</h2>
        <p> {text.length > 0 ? text : "Enter something in the textbox above to preview it here"} </p>


    </div>
    </>
  );
}
