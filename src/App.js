import { useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import imageRickMorty from './img/rick-morty.png';

function App() {

  const [characters, setCharacters] = useState('');

  const restApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const listCharacter = await api.json();
    
    setCharacters(listCharacter.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? 
          <Characters characters={characters} setCharacters={setCharacters}/> :
          <>
            <img src={imageRickMorty} alt="rick&morty" className='img-home'/>
            <button onClick={restApi} className='btn-search'>Buscar personajes</button>
          </>
        }
      </header>
    </div>
  );
}

export default App;
