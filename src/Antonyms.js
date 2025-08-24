import React from "react"

export default function Antonyms(props) {
  const antonymsFromProps = props.antonyms;
  const antonymList = createAntonymList(antonymsFromProps);

  if (antonymList.length === 0 ) {
    return null;
  }

  return (
  <ul style={{ marginTop: 6 }}>
    <li>
      <strong> Antonyms:</strong> {" "}
      <ul>
      {antonymList.map(function (antonym, index) {
        const isLast = index === antonymList.length - 1;
        return (
          <li key={index}>
            {antonym}
            {isLast ? "" : ", "}
          </li>
        );
      })}
      </ul>
    </li>
  </ul>
  );
}

function createAntonymList(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .filter(function (item) { return Boolean(item); })
      .map(function (item) { return String(item); });
  }

  if (typeof value === "string") {
    return value
      .split(/[,;|]/)
      .map(function (piece) { return piece.trim(); })
      .filter(function (piece) { return piece.length > 0; });
  }

  if(value.words && Array.isArray(value.words)) {
    return value.words
      .filter(function (item) { return Boolean(item); })
      .map(function (item) { return String(item); });
  }
  return [];
}