import React from "react"

export default function Phonetics(props) {
  const phonetic = props.phonetic;
  const display = props.display || "inline"

  if (!phonetic) return null;

  if (display === "block") {
    return <h5 className="text-muted ms-2">/{phonetic}/</h5>
  }}