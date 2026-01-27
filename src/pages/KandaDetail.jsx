// useParams() → reads the URL parameter (example: /kanda/bala gives bala).
// We map it to a proper title name for display.
// The <p> tag will later hold the story and images of that Kanda.

import { useParams } from "react-router-dom";
import "./KandaDetail.css";

function KandaDetail() {
  const { kandaName } = useParams();

  // Optional: Map to show proper title case names
  const titles = {
    bala: "Bala Kanda",
    ayodhya: "Ayodhya Kanda",
    aranya: "Aranya Kanda",
    kishkindha: "Kishkindha Kanda",
    sundara: "Sundara Kanda",
    yuddha: "Yuddha Kanda",
    uttara: "Uttara Kanda",
  };

  const displayName = titles[kandaName] || "Unknown Kanda";

  return (
    <div className="kanda-detail">
      <h2>{displayName}</h2>
      <p>Here we will tell the story of {displayName}...</p>
    </div>
  );
}

export default KandaDetail;
