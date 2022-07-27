import { GridNumbers } from "./GridNumbers";
import { Input } from "./Input";
import { Output } from "./Output";
import React, { useState } from "react";
import './App.css';

function App() {
  const [numero, setnumero] = useState("");
  const [numero2, setnumero2] = useState("");
  const [operacion, setOperacion] = useState("");
  const [result, setresult] = useState(0);
  // console.log(numero)


  return (
    <>
      <Input
        numero={numero}
        setnumero={setnumero}
        numero2={numero2}
        setnumero2={setnumero2}
        operacion={operacion}
        setOperacion={setOperacion}
        result={result}
        setresult={setresult} />
      <Output
        numero={numero}
        setnumero={setnumero}
        numero2={numero2}
        setnumero2={setnumero2}
        operacion={operacion}
        setOperacion={setOperacion}
        result={result}
        setresult={setresult}
      />
      <GridNumbers
        numero={numero}
        setnumero={setnumero}
        numero2={numero2}
        setnumero2={setnumero2}
        operacion={operacion}
        setOperacion={setOperacion}
        result={result}
        setresult={setresult}


      />
    </>
  )
}

export default App;
