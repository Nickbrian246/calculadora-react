import React from "react";
import "./input.css"
//operacion ? numero + operacion : ""

function Input({ setnumero2,
    numero2,
    numero,
    setnumero,
    operacion,
    setOperacion,
    result,
    setresult,}) {
    return (
        <>

            <div className="container-input-1">
                <div className="input-1">
                {operacion ? numero + operacion : ""}

                </div>
            </div>
        </>
    )
}

export { Input }