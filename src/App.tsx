import React from 'react';
import {Button} from './Atomic/Atoms/Button/Button';

function App() {
  return (
    <div className="App">
     <h1>Hello World!</h1>
     <Button title={"Teste"} bgColor={"green"} onClick={()=>alert("Teste")}/>
    </div>
  );
}

export default App;
