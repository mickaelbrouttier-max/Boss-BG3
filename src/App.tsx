import { useState } from "react";
import Bosse from "./bossCard";
import bosses from "./data/databoss";
import NavBarone from "./navbar";
import BoutonImage from './btn';
import { useRef } from "react";
import bgVideo from "/images/fond/BALDURS GATE 3 Main Theme Full _ Menu Music Extended Mix(2).mp4";


function App() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

const togglesound = () => setMuted(!muted);


  const [search, setSearch] = useState("");
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  const filteredBosses = bosses.filter((bosse) =>
    bosse.nom.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="tableau">
      <div className="Navbar">
        <article className="navstyle">
          <NavBarone />
        </article>
        <article className="searchstyle">
          <input
            type="text"
            placeholder="search"
            onChange={handleSearch}
          ></input>
          
        </article>
      </div>

      <article className="lereste">
                  <video ref={videoRef} autoPlay muted={muted} loop playsInline className="video-background" onClick={togglesound}> 
            <source src={bgVideo}/>

            </video>
            <button className="soundButton" onClick={togglesound}>
  {muted ?<img src="public/images/fond/alphiras-song-is-insanely-beautiful-and-ive-missed-it-v0-i7b52yxkltqb1.webp" width={104}/> : <img src="public/images/fond/Baldurs-Gate-3-parler-avec-les-morts.jpg" width={104}/>}
</button>
<article className="titreback">
        <h1>Les différents boss dans Baldur Gates 3</h1>
        <h2>Click sur l'image pour faire apparaitre les infos de bases</h2>
        </article>
        <hr></hr>
        {filteredBosses.map((bosse) => (
          <div>
          <Bosse key={bosse.nom} bosse={bosse} />
          <br></br>
          <br></br>
        <BoutonImage imageUrl={bosse.imageUrl} lieux={bosse.lieux} stats={bosse.stats}/>
</div>
  ))}
      </article>
    </div>
  );
}
export default App;
