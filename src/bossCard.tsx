import { useState } from "react";
import "./App.css";

export default function Bosse({ bosse }: { bosse: any }) {
  const [showPortrait, setShowPortrait] = useState(true);

  return (
    <div className="containerCardInfo">
      <article className="cardinfo manuscrit-bg">
        {/* Image au-dessus du texte */}
        <img
          src="/images/fond/Copy-of-4x3_Vertical_Logo_Placement_1_3b-1.jpg"
          className={"imagehide " + (showPortrait ? "visible" : "hidden")}
          onClick={() => setShowPortrait(false)}
        />

        <h2>{bosse.nom}</h2>
        <h2>Acte : {bosse.acte}</h2>
        <h2>Faiblesse : {bosse.faiblesse}</h2>
        <h2>Difficultés : {bosse.difficulte}</h2>
      </article>
    </div>
  );
}