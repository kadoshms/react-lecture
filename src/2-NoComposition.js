import React, { useState } from 'react';
import styled from "styled-components";
import { NoComposableSearchList } from './1-NoComposableSearchList';
import { countryList } from "./data";

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
`;

// Requirement: locate the selected value below the list

export const NoComposition = () => {
    const [selected, setSelected] = useState(null);
    return (
        <Root>
            <NoComposableSearchList
                onSelectItem={setSelected}
                selectedValue={selected}
                items={countryList}
                title={'Countries'}
            />
        </Root>
    );
}
