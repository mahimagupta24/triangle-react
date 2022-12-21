import React,{useState} from "react";

function Hypoteneus(){
    const[getBase,setBase]=useState("")
    const[getHeight,setHeight] = useState("")
     const [output,setOutput]=useState("")
    return <div>
        <h1>Calculate Hypoteneus</h1>
    <label>Enter base value a =</label>
    <input type="number"value={getBase}onChange={baseHandler}/>
    <label>Enter height value b =</label>
    <input type="number"value={getHeight} onChange={heightHandler}/>
    <button onClick={calculate}>calculate</button>
    <div>{output}</div>
    </div>

function baseHandler(e){
setBase(e.target.value)
}

function heightHandler(e){
    setHeight(e.target.value)
    }

    function calculate(){
        const base = Number(getBase)
        const height = Number(getHeight)
        if(base===0||height===0||getBase===""||getHeight===""){
            setOutput("inputs cant be zero or empty")
        }else{
            const sum = Math.sqrt(base*base+height*height)
            console.log(sum)
            setOutput(sum)
        }
    }
}

export default Hypoteneus;