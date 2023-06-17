import React from 'react';
import Responsibility from './Responsibility';

function Responsibilities({ responsbilities }) {
    console.log(responsbilities);
    return (
        <>
            {responsbilities.map((responsibility, i) => (
                <>
                    <Responsibility key={i} responsibility={responsibility} />
                </>
            ))}
            <hr />
        </>
    );
}

export default Responsibilities;
