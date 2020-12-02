import { Link } from "react-router-dom";
import "./LandingMain.css";
function LandingMain() {
  return (
    <div className="LandingMain">
      <header className="LandingAppName">
        <h1>Gliss</h1>
        <h3>
          <i>live in grocery bliss.</i>
        </h3>
        <Link to="/signup">
          <button>Get Started</button>
        </Link>
      </header>
      <section>
        <h2>Start where you are.</h2>
        <p>Input your grocery items into your Gliss pantry.</p>
      </section>
      <section>
        <h2>Use what you have.</h2>
        <p>Add items from your pantry to your recipe search.</p>
      </section>
      <section>
        <h2>Do what you can.</h2>
        <p>Let us find a recipe for you and get cooking.</p>
      </section>
    </div>
  );
}

export default LandingMain;
