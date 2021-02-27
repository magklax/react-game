import React, { useMemo, useContext } from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

import { heroes } from '../../data/heroes';
import { Context } from '../../context/context';

const { torchred, white } = colors;


const TD = styled.th`
  padding: 10px 0;
`;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: rgba(0,0,0, 0.3);
  }
`;

const Th = styled.th`
  padding: 10px 0;
  color: ${torchred};
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 25px;
  font-size: 18px;
  background-color: white;
`;

export default () => {
  const { state } = useContext(Context);

  const total = useMemo(() => new Array(10).fill(null).map((_, index) => state.total[index]));

  return (
    <Table>
      <tbody>
        <tr>
          <Th>username</Th>
          {heroes.length && heroes.map((hero) => (
            <Th key={hero.name}>{hero.name}</Th>
          ))}
        </tr>

        {total.length && total.map((elem, i) => {

          return (
            <TR key={`tr-${i}`}>
              <TD>hey</TD>
              {heroes.length && heroes.map((hero, j) => {
                const result = elem && Object.entries(elem)[j] ? Object.entries(elem)[j][1] : '00:00';

                return (
                  <TD key={`td-${hero.name}`}>{result}</TD>
                )

              })}
            </TR>
          )
        })}

      </tbody>

    </Table>
  )
}


