import React from 'react';

const interview = () => {

    const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];


    return (
        <>
        <div>
            {arr.filter((value, index) => {return arr.indexOf(value) === index} )}
        </div>
        </>
    )
};

export default interview;