import React,{useState} from "react";

function IsTriangle(){

    const[input1,setInput1]=useState("")
    const[input2,setInput2]=useState("")
    const[input3,setInput3]=useState("")
    const [output,setOutput]=useState("")

    return <div>
      <h1>Is Triangle</h1>
      <label>Angle 1</label>
      <input type="number"onChange={angle1InputHandler} value={input1}/>
      <label>Angle 2</label>
      <input type="number" onChange={angle2InputHandler}value={input2}/>
      <label>Angle 3</label>
      <input type="number" onChange={angle3InputHandler}value={input3}/>
      <button onClick={clickHandler}>click</button>
      <div>{output}</div>
    </div>   
  
    function angle1InputHandler(e){
      console.log(e.target.value)
      setInput1(e.target.value)
    }

    function angle2InputHandler(e){
      console.log(e.target.value)
      setInput2(e.target.value)
    }

    function angle3InputHandler(e){
      console.log(e.target.value)
      setInput3(e.target.value)
    }
  
    function clickHandler(){
      let angleInput1=Number(input1)
      let angleInput2=Number(input2)
      let angleInput3=Number(input3)
      if((input1===""||input2===""||input3==="")||(angleInput1===0||angleInput2===0||angleInput3===0)){
        setOutput("input can't be empty or zero")
      }else  if(angleInput1+angleInput2+angleInput3===180){
        setOutput("yeah! it's  a triangle")
      }
    }
  }


export default IsTriangle;