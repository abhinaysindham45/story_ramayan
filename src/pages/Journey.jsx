/*
This file defines the second page (component).
When the URL changes to /journey, this replaces the Home component automatically.
*/
import { useNavigate } from "react-router-dom";
import "./Journey.css";
import { useLanguage } from "../LanguageContext";
import { translateText } from "../translate";
import React, { useEffect, useState } from "react";

import bgBala from "../assets/images/bala.jpg";
import bgAyodhya from "../assets/images/ayodhya.jpg";
import bgAranya from "../assets/images/aranya.jpg";
import bgKishkindha from "../assets/images/kishkindha.jpg";
import bgSundara from "../assets/images/sundara.jpg";
import bgYuddha from "../assets/images/yuddha1.jpg";
import bgUttara from "../assets/images/uttara.jpg";

export default function Journey() {
  const { language } = useLanguage();
  const navigate = useNavigate();

translateText("Good morning", "hi").then(console.log);

const kandas = [
  {
    name: "Bala Kanda",
    path: "/bala-kanda",
    description: "The childhosod and divine beginnings of Lord Rama.",
    bgImage: bgBala,
  },
  {
    name: "Ayodhya Kanda",
    path: "/ayodhya-kanda",
    description: "Rama’s exile and the sorrow of Ayodhya.",
    bgImage: bgAyodhya,
  },
  {
    name: "Aranya Kanda",
    path: "/aranya-kanda",
    description: "Life in the forest and Sita’s abduction.",
    bgImage: bgAranya,
  },
  {
    name: "Kishkindha Kanda",
    path: "/kishkindha-kanda",
    description: "Rama’s alliance with Hanuman and Sugriva.",
    bgImage: bgKishkindha,
  },
  {
    name: "Sundara Kanda",
    path: "/sundara-kanda",
    description: "Hanuman’s heroic journey to Lanka.",
    bgImage: bgSundara,
  },
  {
    name: "Yuddha Kanda",
    path: "/yuddha-kanda",
    description: "The great war between Rama and Ravana.",
    bgImage: bgYuddha,
  },
  {
    name: "Uttara Kanda",
    path: "/uttara-kanda",
    description: "Rama’s rule and the final chapters of Ramayana.",
    bgImage: bgUttara,
  },
];

const [translatedKandas, setTranslatedKandas] = useState(kandas);
const [translatedTitle, setTranslatedTitle] = useState("The Seven Kandas of Ramayanam");

useEffect(() => {
    const translateAll = async () => {
      // translate title
      const newTitle = await translateText("The Seven Kandas of Ramayanam", language);
      setTranslatedTitle(newTitle);

      // translate kandas (name + description)
      const translated = await Promise.all(
        translatedKandas.map(async (kanda) => ({
          ...kanda,
          name: await translateText(kanda.name, language),
          description: await translateText(kanda.description, language),
        }))
      );
      setTranslatedKandas(translated);
    };

    translateAll();
  }, [language]);




  return (

    <div className="journey-container">
      <h1 className="journey-heading">The Seven Kandas of Ramayanam</h1>
      <div className="kanda-sections">
        {kandas.map((kanda, index) => (
          <button
            key={index}
            className="kanda-btn"
            onClick={() => navigate(kanda.path)}
            style={{backgroundImage: `url(${kanda.bgImage})`,}}
          >
            <h2>{kanda.name}</h2>
            <p>{kanda.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}



/*
const kandas = [...] — we made an array of the 7 Kanda names.
This way, if we ever want to change names or add info later, we only edit the array, not HTML.
{kandas.map(...)} — this is React’s map function.
It loops through the array and creates a <div> for each Kanda.
key={index} — React requires a unique key for each child item.
Inside each card, we show the <h3> title.
.kanda-grid — is our grid container. We’ll design this in CSS next.


useNavigate() — from React Router, allows programmatic navigation.
Instead of using <Link> tags, we can navigate when something is clicked.
kandas array now has both name and a URL path.
handleClick() — takes a path (like "bala") and navigates to /kanda/bala.
We added onClick={() => handleClick(kanda.path)} to each section — making them act like clickable buttons.
*/


