import React from "react"
import DefinitionItem from "./DefinitionItem"
import Phonetics from "./Phonetics";
import Illustrations from "./Illustrations";

export default function Results(props) {
  const word = props.word;
  const phonetic = props.phonetic;
  const meanings = props.meanings;
  const imagesApiKey = props.imagesApiKey;

  if (!Array.isArray(meanings)) return null; 
  
  return (
    <div className="results-container">
      <div className="results-header">
      <h3>
        {word}
        <Phonetics phonetic={phonetic} display="block"/>
      </h3>
      </div>
      <Illustrations word={word} apiKey={imagesApiKey} maximumImages={2} />
      <ul className="definitions-list">
        {meanings.map((meaning, index) => (
          <DefinitionItem 
          key={index}
          partOfSpeech={meaning.partOfSpeech}
          definition={meaning.definition}
          example={meaning.example}
          synonyms={meaning.synonyms}
          antonyms={meaning.antonyms}
          />
          
        ))}
      </ul>
    </div>
  );
}
