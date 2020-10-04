import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import './Characters.css';
import CharacterBox from '../../components/CharacterBox';

export interface RpgClass {
  id: string;
  name: string;
  hitdice: string;
}

export interface Character {
  id: string;
  name: string;
  level: number;
  classes: [RpgClass];
}

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      id
      name
      level
      classes {
        id
        name
        hitdice
      }
    }
  }
`;

const CharacterPage: FC<{}> = () => {
  const { loading, error, data } = useQuery<{characters: [Character]}>(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="characters-container">
      {data?.characters?.map((character: Character) => (
        <CharacterBox {...character}/>
      ))}
    </div>
  );
}

export default CharacterPage;
