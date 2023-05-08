import React from 'react'

export default function Characters({characters, setCharacters}) {
  
  const resetCharacters = () => {
    setCharacters('');
  }

  return (
    <div className='characters'>
      <h1>Personajes</h1>
      <span className='back-home' onClick={resetCharacters}>Volver a la home</span>
      <div className='container-characters'>
        {characters.map((character) => (
          <div className='character-container' key={character.name}>
            <div>
              <img src={character.image} alt={character.name}/>
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === 'Alive' ?
                  <div>
                    <span className='alive'/>
                    Alive
                  </div>
                  : 
                  <div>
                    <span className='dead'/>
                    Dead
                  </div>
                }
              </h6>
              <p>
                <span className='text-grey'>Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className='text-grey'>Especies: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className='back-home' onClick={resetCharacters}>Volver a la home</span>
    </div>
  )
}
