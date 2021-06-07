import { useContext } from 'react';
import {Counter, CounterContext} from "./8-Counter";

const SpecialVale = () => {
    const { value } = useContext(CounterContext);

    return <div>{value % 2 === 0 ? 'even' : 'odd'}</div>
};


export const Reusable = () => (
    <div style={{ display: 'flex' }}>
        <Counter>
            <Counter.Increment />
            <Counter.Decrement />
            <Counter.Value />
        </Counter>


        <Counter>
            <Counter.Value />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Counter.Increment />
                <Counter.Decrement />
            </div>
        </Counter>


        <Counter>
            <Counter.Value />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Counter.Increment />
                <Counter.Decrement />
            </div>
        </Counter>


        <Counter>
            <Counter.Increment />
            <SpecialVale />
            <Counter.Decrement />
        </Counter>


        <Counter>
            <Counter.Increment />
            <Counter.Decrement />
            <Counter.Value />
            <Counter>
                <Counter.Increment />
                <Counter.Decrement />
                <Counter.Value />
                <Counter>
                    <Counter.Increment />
                    <Counter.Decrement />
                    <Counter.Value />
                </Counter>
            </Counter>
        </Counter>
    </div>
);
