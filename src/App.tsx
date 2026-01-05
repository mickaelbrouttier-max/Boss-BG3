import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import Bosse from "./bossCard";
import bosses from "./data/databoss";
import NavBarone from "./navbar";
import BoutonImage from './btn';
import bgVideo from "/images/fond/BALDURS GATE 3 Main Theme Full _ Menu Music Extended Mix(2).mp4";

interface Boss {
  id: number;
  nom: string;
  prenom: string | null;
  acte: number;
  faiblesse: string;
  sortFetiche: string;
  imageUrl: string;
  lieux: string;
  difficulte: number;
  stats: Record<string, number>;
}

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => setMuted(!muted);

  const [search, setSearch] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredBosses: Boss[] = bosses.filter((bosse: Boss) =>
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
          />
        </article>
      </div>

      <article className="lereste">
        <video
          ref={videoRef}
          autoPlay
          muted={muted}
          loop
          playsInline
          className="video-background"
          onClick={toggleSound}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <button className="soundButton" onClick={toggleSound}>
          {muted ? 
            <img src="/images/fond/alphiras-song-is-insanely-beautiful-and-ive-missed-it-v0-i7b52yxkltqb1.webp" width={104} alt="Sound off"/> 
            : 
            <img src="/images/fond/Baldurs-Gate-3-parler-avec-les-morts.jpg" width={104} alt="Sound on"/>
          }
        </button>

        <article className="titreback">
          <h1>Les différents boss dans Baldur Gates 3</h1>
          <h2>Click sur l'image pour faire apparaitre les infos de bases</h2>
        </article>
        <hr />

        {filteredBosses.map((bosse: Boss) => (
          <div key={bosse.id}>
            <Bosse bosse={bosse} />
            <br />
            <br />
            <BoutonImage 
              imageUrl={bosse.imageUrl} 
              lieux={bosse.lieux} 
              stats={bosse.stats} 
            />
          </div>
        ))}
      </article>
    </div>
  );
}

export default App;