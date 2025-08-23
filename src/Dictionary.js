import React, { useState } from "react"
import "./Dictionary.css"

export default function Dictionary() {
  let [word, setWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}...`)
  }
  function handleWordSearch(event) {
    setWord(event.target.value)
  }

  return (
    <p className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autofocus="true" onChange={handleWordSearch} />
      </form>
    </p>
  )
}