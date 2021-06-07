import React, {useState, useCallback, useContext} from 'react';
import {MyAppStateContext, MyAppStateProvider} from "./6-Context";

const GrandGrandChild = () => {
    const {increment, decrement} = useContext(MyAppStateContext)
    return (
        <div style={{ width: 150, height: 150, border: '1px solid green' }}>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

const GrandChild = () => (
    <div style={{ width: 250, height: 250, border: '1px solid blue' }}>
        <GrandGrandChild />
    </div>
);

const Child = () => (
    <div style={{ width: 300, height: 300, border: '1px solid red' }}>
        <GrandChild />
    </div>
);

export const ContextConsumer = () => {
    const [value, setValue] = useState(0);

    const increment = useCallback(() => setValue(val => val + 1), []);
    const decrement = useCallback(() => setValue(val => val - 1), []);

    return (
        <MyAppStateProvider value={value} increment={increment} decrement={decrement}>
            <div style={{width: 400, height: 400, border: '1px solid purple'}}>
                <div>value: {value}</div>
                <Child />
            </div>
        </MyAppStateProvider>
    );
};
