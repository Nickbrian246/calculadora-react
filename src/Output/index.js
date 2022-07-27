import React from "react";
import "./output.css"
// soy el de abajo
//!operacion ? numero : numero2
function Output({numero,numero2, operacion, result}) {
    return (
        <>

            <div className="conetner-output-22">
                <div className="output-22">{ result  ? result  : (!operacion ? numero : numero2)} </div>
                
            </div>
            {console.log(numero2+"soy numero 2"),
            console.log(numero+"soy numero1") }
        </>
    )
}


export { Output };