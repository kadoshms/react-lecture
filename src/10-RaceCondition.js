import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Service} from "./service";
console.log('coin')
const SEVERITIES = ['INFO', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];

const Attribute = styled.div`
  border: 1px solid #c1c1c1;
  flex: 1;
`;

const Row = styled.li`
    display: flex;
`;

const List = styled.ul`
  padding: 0;
  margin: 0 20px;
`;

const Filters = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 10px 0;
`;

const Root = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Filter = styled.div`
    margin: 0 5px;
`;

// any idea?
let count = 0;

export const RaceCondition = () => {
    const [severities, setSeverities] = useState(SEVERITIES);
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        return () => {
            console.log('unmount')
        }
    }, []);
    useEffect(() => {
        let cancelled = false;
        const fetchIncidents = async () => {
            const data = await Service.getData(severities, count++);
            if (!cancelled) {
                setIncidents(data);
            }
        };
        fetchIncidents();

        return () => {
            cancelled = true;
        }
    }, [severities]);

    const toggleSeverity = (sev) => {
        setSeverities(prev => prev.includes(sev) ? prev.filter(s => s !== sev) : prev.concat(sev));
    }

    return (
        <Root>
            <Filters>
                {SEVERITIES.map(sev => (
                    <Filter key={sev}>
                        <input checked={severities.includes(sev)} onChange={() => toggleSeverity(sev)} id={sev} type={"checkbox"} />
                        <label htmlFor={sev}>{sev}</label>
                    </Filter>
                ))}
            </Filters>
            <List>
                {incidents.map(({ id, category, severity, source }) => (
                    <Row key={id}>
                        <Attribute>{id}</Attribute>
                        <Attribute>{category}</Attribute>
                        <Attribute>{severity}</Attribute>
                        <Attribute>{source}</Attribute>
                    </Row>
                ))}
            </List>
        </Root>
    );
};
