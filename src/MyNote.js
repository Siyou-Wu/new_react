import React, { useState } from 'react';
function MyNote() {
  const [number, setNumber] = useState(1);
  let a = 1;

  
  // add event for button
  const handleClick = () => {
    let newNumber = number * 5 - 3;
    setNumber(newNumber);
  }


  return (
    <div className="MyNote">
      <header className="MyNote-header">
        <p>
          My Note {number} App
        </p>
        <p>{number} </p>
       
        <button onClick = {handleClick}>Click me</button>
        <p>{number} </p>

      </header>
    </div>
  );
}

export default MyNote;
