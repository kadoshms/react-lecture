import React, { useState } from 'react';
import styled from "styled-components";
import { countryList } from "./data";
import {ComposableList} from "./3-ComposableList";

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

// Requirement: locate the selected value below the list

export const Composition = () => {
    const [selected, setSelected] = useState(null);
    return (
        <Root>
            <ComposableList>
                <ComposableList.Title>Countries</ComposableList.Title>
                <ComposableList.List onSelectItem={setSelected} items={countryList} />
                {/*<ComposableList.Selected>{selected}</ComposableList.Selected>*/}
            </ComposableList>
        </Root>
    );
}
