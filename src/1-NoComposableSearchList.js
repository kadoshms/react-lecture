import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  border: 1px solid #c1c1c1;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const List = styled.ul`
  margin: 0;
  max-height: 250px;
  overflow: auto;
`;

const Item  = styled.li`
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
    }
`;

const Title = styled.h2``;

const Selected = styled.div`
    border: 1px solid #c1c1c1;
`;

export const NoComposableSearchList = ({
    items,
    onSelectItem,
    selectedValue,
    title
}) => (
    <Root>
        <Title>{title}</Title>
        <Selected>{selectedValue ? selectedValue : 'Nothing selected'}</Selected>
        <List>
            {items.map(it => <Item onClick={() => onSelectItem(it)} key={it}>{it}</Item>)}
        </List>
    </Root>
);
