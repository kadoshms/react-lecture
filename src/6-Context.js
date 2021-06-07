import React from 'react';

export const MyAppStateContext = React.createContext({
    value: 0,
    increment: () => {},
    decrement: () => {}
});

export const MyAppStateProvider = ({ children, value, increment, decrement }) => {
    return <MyAppStateContext.Provider value={{ increment, decrement, value }}>{children}</MyAppStateContext.Provider>;
};

// export const useMyAppStateContext = () => useContext(MyAppStateContext);
