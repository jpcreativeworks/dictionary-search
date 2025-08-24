import React from "react"

export default function Synonymns(props) {
  const synonyms = props.synonyms;

  if (!Array.isArray(synonyms) || synonyms.length === 0) return null;

  return (
    <ul style={{ marginTop: 6 }}>
      <li>
        <strong> Synonyms:</strong> {" "}
        <ul>
        {synonyms.map((synonyms, index) => (
            <li key={index}>
              {synonyms}
            </li>
        ))}
        </ul>
      </li>
    </ul>
  );
}