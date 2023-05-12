import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Container, TableCotainer } from './styles';
import { Character } from '../../types';
import { LoadingContext } from '../../contexts/LoadingContext';

export function StarWars() {
  const { setLoading } = useContext(LoadingContext);

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    setLoading(true);

    axios.get('https://swapi.dev/api/people')
      .then((response) => {
        setCharacters(response.data.results);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  return (
    <Container>
      <TableCotainer>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Altura (cm)</th>
            <th>Peso (Kg)</th>
            <th>Data de nascimento</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) =>  (
            <tr key={character.name}>
              <td>{character.name}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
              <td>{character.birth_year}</td>
            </tr>
          ))}
        </tbody>
      </TableCotainer>
    </Container>
  );
}
