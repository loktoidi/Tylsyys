import './App.css';
import {useEffect, useState} from 'react';



function App(){
  function loadActivity(){
      setIsLoading(true);
      fetch('https://www.boredapi.com/api/activity')
  .then((response) => response.json())
  .then((data) => setActivity(data.activity));
      setIsLoading(false)

  }

  const [activity, setActivity] = useState([]);
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    loadActivity();
},[]);

if(isLoading) {
    return <p>Lataa...</p>
}

return (
  <div>
    <h3>Tylsyys tyrmääjä.</h3>
      <h1>{activity}</h1>
      <button onClick={loadActivity}>Anna toinen</button>
  </div>
);
}

export default App;



