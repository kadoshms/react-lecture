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

const ListRoot = styled.ul`
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

const TitleRoot = styled.h2``;

const SelectedRoot = styled.div`
    border: 1px solid #c1c1c1;
`;

const Title = ({ children }) => (
    <TitleRoot>{children}</TitleRoot>
);

const Selected = ({ children }) => (
    <SelectedRoot>{children ? children : 'Nothing selected'}</SelectedRoot>
);

export const List = ({ onSelectItem, items }) => (
    <ListRoot>
        {items.map(it => <Item onClick={() => onSelectItem(it)} key={it}>{it}</Item>)}
    </ListRoot>
);

export const ComposableList = ({
    children
}) => (
    <Root>
        {children}
    </Root>
);

ComposableList.List = List;
ComposableList.Title = Title;
ComposableList.Selected = Selected;
