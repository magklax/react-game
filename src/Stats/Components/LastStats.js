import React, { useMemo, useContext } from 'react';

import { heroes } from '../../data/heroes';
import { Context } from '../../context/context';
import { Table, TR, TD, TH } from './styles';

export default () => {
  const { state } = useContext(Context);

  const total = useMemo(() => new Array(10).fill(null).map((_, index) => state.total[index]));

  return (
    <Table>
      <tbody>
        <TR>
          <TH>username</TH>
          {heroes.length && heroes.map((hero) => (
            <TH key={hero.name}>{hero.name}</TH>
          ))}
        </TR>

        {total.length && total.map((elem, i) => {

          return (
            <TR key={`tr-${i}`}>
              <TD>username</TD>
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


