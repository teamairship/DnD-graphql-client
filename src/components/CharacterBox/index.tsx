import React, { FC } from 'react';
import { Character } from '../../pages/Characters';
import './CharacterBox.css';

const CharacterBox: FC<Character> = ({id, name, level, classes})  => {
  return (
    <div key={id} className="character">
      <h1>
        {name}
      </h1>
      <p>
        Level: {level}
      </p>
      <br />
      <h2>Classes:</h2>
      {classes.map(({name}) => (
        <p>{name}</p>
      ))}
    </div>
  )
}

export default CharacterBox;