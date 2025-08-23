import React, { useState } from "react"
import axios from "axios"
import "./Dictionary.css"

export default function Dictionary() {
  let [term, setTerm] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for definition of ${term}...`)

    let key = "7fd5430a29oa8949b4d239de06t9a3d4"
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${term}&key=${key}`
    axios.get(apiUrl).then(handleResponse);
  }
  function handleTermSearch(event) {
    setTerm(event.target.value)
  }

  return (
    <p className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autofocus="true" onChange={handleTermSearch} />
      </form>
    </p>
  )
}