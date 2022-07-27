import React from "react";
import "./gridNumbers.css"



function GridNumbers(
    {
        setnumero2,
        numero2,
        numero,
        setnumero,
        operacion,
        setOperacion,
        result,
        setresult,
    }) {

    const clicknumber = (val) => {

        if (operacion === "") { // si no hay operacion entro y asigna al numero
             return setnumero(numero + val);// el return es necesario para que la evaluacion ahi termine
            
        } //si ya tenemos operacion asignalo a la operacion 2 
        setnumero2(numero2+ val);
        //   if(numero2===""){
        //   setnumero(numero+val) 
        // }
        // setnumero2(numero2+val)
        // console.log(numero2)
    }

    const cliclOperation =(val) =>{
        setOperacion(val);
        
    }

    // const suma = () => {
    //     const operacion1 = Number(numero);
    //     const operacion2 = Number(numero2);
    //     const sumaa = operacion1 - operacion2;
    //     console.log(sumaa)
    // }
    const resultado=()=>{
        // eslint-disable-next-line default-case
        switch(operacion){
            case "+":
            setresult(Number(numero) + Number(numero2));
            break;
            case "-":
            setresult(Number(numero) - Number(numero2));
            break;
            case "*":
            setresult(Number(numero) * Number(numero2));
            break;
            case "/":
            setresult(Number(numero) / Number(numero2));
            break;
        }
    }

    const clear=()=>{
        setOperacion("");
        setnumero("");
        setnumero2("");
        setresult(0);
    }
    const deleteNumber = () => {
        if (operacion === "") {
            setnumero(numero.toString().slice(0, -1));
        } else {
            setnumero2(numero2.toString().slice(0, -1));
        }
      };



    return (
        <>

            <div className="Grid-container">
                <button onClick={() => { clear() }} className="big-button">AC</button>
                <button onClick={() => {deleteNumber() }} >DEL</button>
                <button onClick={() => {cliclOperation("/") }} >/</button>
                <button onClick={() => { clicknumber(7) }} >7</button>
                <button onClick={() => { clicknumber(8) }} >8</button>
                <button onClick={() => { clicknumber(9) }} >9</button>
                <button onClick={() => { cliclOperation("*")}} >*</button>
                <button onClick={() => { clicknumber(4) }} >4</button>
                <button onClick={() => { clicknumber(5) }} >5</button>
                <button onClick={() => { clicknumber(6) }} >6</button>
                <button onClick={() => { cliclOperation("+") }} >+</button>
                <button onClick={() => { clicknumber(1) }} >1</button>
                <button onClick={() => { clicknumber(2) }} >2</button>
                <button onClick={() => { clicknumber(3) }} >3</button>
                <button onClick={() => {cliclOperation("-") }} >-</button>
                <button onClick={() => { }} >.</button>
                <button onClick={() => { clicknumber(0) }} >0</button>
                <button onClick={()=>{resultado()}} className="big-equeal">=</button>
            </div>
        </>
    )
}

export { GridNumbers }