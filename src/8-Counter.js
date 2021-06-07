import React , { useCallback, useState, useContext } from "react";

export const CounterContext = React.createContext({
    increment: () => {},
    decrement: () => {},
    value: 0
});

const Increment = () => {
    const { increment } = useContext(CounterContext);

    return <button onClick={increment}>+</button>;
};

const Decrement = () => {
    const { decrement } = useContext(CounterContext);

    return <button onClick={decrement}>-</button>;
};

const Value = ({ className }) => {
    const { value } = useContext(CounterContext);
    return <span className={className}>{value}</span>;
};

export const Counter = ({ children }) => {
    const [value, setValue] = useState(0);
    const increment = useCallback(() => setValue(val => val + 1), []);
    const decrement = useCallback(() => setValue(val => val - 1), []);
    return (
        <CounterContext.Provider value={{ increment, decrement, value }}>
            <div style={{ border: '1px solid black', borderRadius: '5px', margin: '10px', padding: '5px' }}>
                {children}
            </div>
        </CounterContext.Provider>
    );
};

Counter.Value = Value;
Counter.Decrement = Decrement;
Counter.Increment = Increment;
