import { useState } from 'react';

import './App.css';
import imgRickMorty from '../src/img/rick-morty.png';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const handleOnClickSearchCharacters = async () => {
    //TODO add some logic to get random different character each search
    // characters count 826
    const randomArr = [];
    while (randomArr.length < 12) {
      randomArr.push(Math.floor(Math.random() * 286));
    }
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomArr}`);
    const data = await response.json();

    console.log(randomArr);
    console.log(data);

    setCharacters(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title" >Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imgRickMorty} alt="Rick & Morty" className="img-home" />
            <button
              onClick={handleOnClickSearchCharacters}
              className="btn-search"
            >
              Random Characters
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
