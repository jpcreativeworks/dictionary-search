import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [term, setTerm] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    const entry = response.data;
    console.log("entry:", entry);
    setDefinition(entry);
  }  

  function search(event) {
    event.preventDefault();
    const q = term.trim();
    if (!q) return;

    let key = "7fd5430a29oa8949b4d239de06t9a3d4"
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${term}&key=${key}`
    axios.get(apiUrl).then(handleResponse);
  }
 

 return (
    <div className="Dictionary">
      <form onSubmit={search}>
       <input
          type="search"
          autoFocus
          placeholder="Search a word…"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button> 
      </form>
      <Results results={definition} />
    </div>
  )
}