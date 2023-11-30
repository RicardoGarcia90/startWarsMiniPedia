import { useState, useEffect } from 'react';
import classes from './App.module.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();

      const moviesFormated = data.results.map((moviesItem) => {
        return {
          id: moviesItem.episode_id,
          title: moviesItem.title,
        };
      });

      setMovies(moviesFormated);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Start Wars Mini-Pédia</h1>
      {isLoading && <p className={classes.isLoadingText}>Carregando dados!</p>}
      {!isLoading && (
        <ul className={classes.lisTitle}>
          {movies.map((itemMovie) => (
            <li key={itemMovie.id}>{itemMovie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
