import { useState } from "react";

interface BoutonImageProps {
  imageUrl: string;
  lieux: string;
  stats: Record<string, number>;
}

export default function BoutonImage({imageUrl, lieux, stats}: BoutonImageProps) {
  const [showImage, setShowImage] = useState(false);
  const [fullImage, setFullImage] = useState<string | null>(null);

  return (
    <div className="imageBoss">
      <button className="medieval-button" onClick={() => setShowImage(!showImage)}>
        {showImage ? "Cacher les infos" : "Plus d'info (Spoil)"}
      </button>

      {showImage && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "70px auto 0 auto",
            alignItems: "flex-start",
          }}
        >
          <img src={imageUrl} alt="" width={400} height={300} onClick={() => setFullImage(imageUrl)} style={{cursor: "pointer", transition:"0.3s"}} />
          {fullImage && (
            <div className="lightbox" onClick={() => setFullImage(null)}>
              <img src={fullImage} alt="grande image" className="lightbox-img"/>
            </div>
          )}
          <div className="manuscrit-bg">
            <h2>Stats :</h2>
            <br></br>
            <br></br>
            <ul>
              {Object.entries(stats).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          </div>
          <img src={lieux} alt="" width={400} height={300} onClick={() => setFullImage(lieux)} style={{cursor: "pointer", transition:"0.3s"}}/>
          {fullImage && (
            <div className="lightbox" onClick={() => setFullImage(null)}>
              <img src={fullImage} alt="grandie" className="lightbox-img"/>
                          </div>
          )}
        </div>

      )}
    </div>
  );
}