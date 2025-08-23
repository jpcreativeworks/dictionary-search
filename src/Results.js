import React from "react"

export default function Results({ results }) {
  if (!results || !Array.isArray(results.meanings)) return null; 
  

  return (
    <div className="my-3">
      <h3>{results.word}</h3>
      <ul>
        {results.meanings.map((m, index) => (
          <li key={index}>
            <strong>Definition:</strong>{" "}
            {m.partOfSpeech && <em>({m.partOfSpeech})</em>}{" "}
            {m.definition}
          </li>
        ))}
      </ul>
    </div>
  );
}
