import React, { useEffect } from 'react';
import './App.css';
import NewNote from './containers/NewNote';
import Notes from './containers/Notes';
import { useDispatch } from 'react-redux';
import { initNotes } from './store/reducers/reducer';

// Koska App.js lataa ensimmäisiksi, siksi getNotes funktio pitää olla täällä
// App.js => tulee ennen.
// Notes komponentti pysyy PUHTAANA eli DEFAULTINA. EI MUTAATIOTA.
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initNotes());
    // dispatch tapahtuu vain kerran ja näin se varmistetaan.
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
