import React, { useState, useEffect } from 'react';
import { heroes } from '../../data/heroes';
import { Table, TR, TD, TH, Caption } from './styles';

export default ({ stats }) => {
  const { username, results } = stats;
  const [total, setTotal] = useState([]);

  useEffect(() => {
    if (results) {
      setTotal((prev) => prev = new Array(10).fill(null).map((_, index) => results[index]));
    }
  }, [results]);

  return (
    <Table>
      <Caption>Username: {username}</Caption>
      <tbody>
        <TR>
          {heroes.length && heroes.map((hero) => (
            <TH key={hero.name}>{hero.name}</TH>
          ))}
        </TR>

        {total.length > 0 && total.map((elem, index) => {
          return (
            <TR key={`tr-${index}`}>
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


