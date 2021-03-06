import React, { useState } from 'react'
import './App.css'

function LabeledSlider({ label, value, setValue }) {
  return (
    <div>
      <div className="color-label">{label}</div>
      <input type="range" 
         min="0"
         max="255"
         value={value}
         onChange={(event)=>{setValue(parseInt(event.target.value,10))}}/>
      <span>{value}</span>
      </div>
  );
}



function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const color = {background: `rgb(${red}, ${green}, ${blue})`};
  return (
    <div className="color-picker">
      <div className="color-swatch" style={color} ></div>
      <LabeledSlider label="red"   value={red}   setValue={setRed}/>
      <LabeledSlider label="green" value={green} setValue={setGreen}/>
      <LabeledSlider label="blue"  value={blue}  setValue={setBlue}/>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ColorPicker />
    </div>
  )
}

export default App
