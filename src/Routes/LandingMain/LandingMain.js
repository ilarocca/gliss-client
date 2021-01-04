import { Link } from 'react-router-dom';
import './LandingMain.css';
import { MdLocalGroceryStore } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';
import { GiCook } from 'react-icons/gi';
// import logo from '../../Images/logo.png';

function LandingMain() {
  return (
    <>
      <header className="tagline">
        <div>
          {/* <img src={logo} alt="Logo" className="LandingLogo" /> */}
          <h2 className="tagline-text">Live in grocery bliss.</h2>
          <Link to="/signup">
            <button className="get-started">Get Started</button>
          </Link>
        </div>
      </header>

      <div className="descriptions">
        <section className="start">
          <div className="text">
            <MdLocalGroceryStore className="icon" size="70px" />
            <h2>Start where you are.</h2>
            <p>Input your grocery items into your Gliss pantry.</p>
          </div>
        </section>
        <section className="use">
          <div className="text">
            <GoSearch className="icon" size="70px" />
            <h2>Use what you have.</h2>
            <p>Add items from your pantry to your recipe search.</p>
          </div>
        </section>
        <section className="do">
          <div className="text">
            <GiCook className="icon" size="70px" />
            <h2>Do what you can.</h2>
            <p>Let us find a recipe for you and get cooking.</p>
          </div>
        </section>
      </div>
      <footer>&#169;Gliss</footer>
    </>
  );
}

export default LandingMain;
