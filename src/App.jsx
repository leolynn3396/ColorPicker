/* eslint-disable react/prop-types */
import { useState } from 'react';

const Color = ({color, A, B}) => { 
  
  var foo = color 

  if(color === B){
    foo = color + " selected"
  }
  
  return (
    <div onClick={() => A(color)} className= {foo}
     ></div>

  )
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list"> 
        <Color color="red" A={setSelectedColor} B={selectedColor} />
        <Color color="blue" A={setSelectedColor} B={selectedColor} />
        <Color color="green" A={setSelectedColor} B={selectedColor} />
      </div>
    </div>
  );
};

export default App;
