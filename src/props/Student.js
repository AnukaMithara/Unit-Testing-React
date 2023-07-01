import React from 'react';

const Student = ({ name, eNumber, year }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>E number: {eNumber}</p>
            <p>Year: {year}</p>
        </div>
    );
}

export default Student;