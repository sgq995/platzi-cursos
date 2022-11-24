import React from 'react';

function HolaMundo() {
    const Hello = 'Hola Mundo!';
    const isTrue = true;

    return (
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso escencial de React</h2>

            <img alt="React" src="https://arepa.s3.amazonaws.com/react.png" />

            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5>}

            {isTrue && <h4>Es verdadero</h4>}
        </div>
    );
};

export default HolaMundo;
