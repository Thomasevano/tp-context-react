import React, {useState} from 'react';
import './App.css';
import Context from './Context';
import Login from './Login';

function App() {

  const [isAuth, setisAuth] = useState(false)
  return (
    <Context.Provider value={isAuth}>
      <Login/>
    </Context.Provider>
  );
}

export default App;
