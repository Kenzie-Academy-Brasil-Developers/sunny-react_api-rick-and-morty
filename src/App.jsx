import { useEffect, useState } from "react";
import "./App.css";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setcharacterList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => setcharacterList(response.results))
      .catch((erro) => console.log(erro));
  }, []);
  
  return (
    <div className="App">
      <div className="App-header">
        <Characters characterList={characterList}></Characters>
      </div>
    </div>
  );
}

export default App;
