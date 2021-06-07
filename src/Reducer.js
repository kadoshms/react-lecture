import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Root = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ReactIsWeird = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    useEffect(() => {
        const foo = async () => {
            await Promise.resolve();
            setA(a => a + 1);
            setB(b => b + 1);
            setC(c => c + 1);
        };
        foo();
    }, [])

    return (
        <Root>
            {a} {b} {c}
        </Root>
    );
};
