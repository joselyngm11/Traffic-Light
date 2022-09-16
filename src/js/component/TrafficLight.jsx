import React, { useState } from "react";

//create your first component
const TrafficLight = () => {

    const [ selectedColor, setSelectedColor ] = useState(undefined)
    const [ addlight, setAddlight ] = useState(false)

    const handleLight = (light)=>{
        //setAdd(!add)
        if(selectedColor == light){
			setSelectedColor(undefined)
		} else {
			setSelectedColor(light)
		}
    }

    const handleChange = ()=>{
		let colors = ["red","yellow","green","purple"]
		let i = 0
		setInterval(()=>{
			if (addlight){
				setSelectedColor(colors[i%4])
			} else {
				setSelectedColor(colors[i%3])
			}
			i++
		},1000)}

	return (
		<div className="container-fluid text-center p-0">
            <h1 className="text-white titulo">Traffic Light</h1>
            <div className="base"></div>
            <div className={addlight ? "traffic-light traffic-light-with-purple" : "traffic-light"}>
                <div className={"light red mt-1 " + (selectedColor === "red" ? " glow" : "opaco")} 
                onClick={() => handleLight("red")}></div>
                <div className={"light yellow " + (selectedColor === "yellow" ? " glow" : "opaco")}
                onClick={() => handleLight("yellow")}></div>
                <div className={"light green " + (selectedColor === "green" ? " glow" : "opaco")}
                onClick={() => handleLight("green")}></div>
                {addlight && (<div className={"light purple " + (selectedColor === "purple" ? " glow" : "opaco")} 
                onClick={() => handleLight("purple")}></div>)}
		    </div>
            <button type="button" className="boton btn btn-dark" onClick={()=>handleChange()}>Change</button>
            <button type="button" className="boton btn btn-dark" onClick={()=>setAddlight(!addlight)}>Add purple light</button>
        </div>
	);
};

export default TrafficLight;