/*
We import useNavigate() from React Router.
→ It lets us move to another route (like /journey) using JavaScript instead of a link.
bgImage imports your background image.
The outer <div> uses className="home" (for styling) and a background image (set dynamically via JS).
When the button is clicked → handleStart() runs → takes you to the /journey route.
*/

import { useNavigate } from "react-router-dom";
import "./Home.css"; // Importing external CSS
import bgImage from "../assets/images/greenback.jpg"; // Background image

function Home() {
  const navigate = useNavigate();

  // Function to navigate to the Journey page
  const handleStart = () => {
    navigate("/journey");
  };

  return (
    <div
      className="home-container"
      style={{backgroundImage: `url(${bgImage})`,}}
    >
      <div className="home-content">
        <h1 className="title">RAMAYANAM</h1>
        <button className="start-btn" onClick={handleStart}>
          Start the Journey
        </button>
      </div>
    </div>
  );
}

export default Home;

