import React from "react"
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function DefinitionItem(props) {
  const definition = props.definition;
  const partOfSpeech = props.partOfSpeech
  const example = props.example;
  const synonyms = props.synonyms;
  const antonyms = props.antonyms;

  return(
    <li>
      <strong>Definition:</strong> {" "}
      {partOfSpeech ? <em>({partOfSpeech})</em> : null} {definition}
      {example ? <div className="text-muted"><em>"{example}"</em></div> : null}

      <Synonyms synonyms={synonyms} />
      <Antonyms antonyms={antonyms} />
    </li>
  )
}