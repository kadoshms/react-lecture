import React, { useState, useCallback } from 'react';

const GrandGrandChild = ({ increment, decrement }) => {
    return (
        <div style={{ width: 150, height: 150, border: '1px solid green' }}>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

const GrandChild = ({ increment, decrement }) => (
    <div style={{ width: 250, height: 250, border: '1px solid blue' }}>
        <GrandGrandChild increment={increment} decrement={decrement} />
    </div>
);

const Child = ({ increment, decrement }) => (
    <div style={{ width: 300, height: 300, border: '1px solid red' }}>
        <GrandChild increment={increment} decrement={decrement} />
    </div>
);

export const WithoutContext = () => {
    const [value, setValue] = useState(0);

    const increment = useCallback(() => setValue(val => val + 1), []);
    const decrement = useCallback(() => setValue(val => val - 1), []);

    return (
        <div style={{width: 400, height: 400, border: '1px solid purple'}}>
            <div>value: {value}</div>
            <Child value={value} increment={increment} decrement={decrement} />
        </div>
    );
};
