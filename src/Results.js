import React from "react"
import DefinitionItem from "./DefinitionItem"

export default function Results(props) {
  const word = props.word;
  const phonetic = props.phonetic;
  const meanings = props.meanings;

  if (!Array.isArray(meanings)) return null; 
  

  return (
    <div className="my-3">
      <h3>{word}</h3>
      <h5>{phonetic ? <small className="text-muted ms-2">{phonetic}</small> : null}</h5>
      <ul>
        {meanings.map((meaning, index) => (
          <DefinitionItem 
          key={index}
          partOfSpeech={meaning.partOfSpeech}
          definition={meaning.definition}
          example={meaning.example}
          synonyms={meaning.synonyms}
          />
          
        ))}
      </ul>
    </div>
  );
}
