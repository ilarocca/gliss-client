import { Link } from 'react-router-dom';
import './MyAccount.css';
function MyAccount() {
  return (
    <div className="my-account">
      <div>
        <h2 className="signout-header">... no seriously, where's my plate?</h2>
        <Link to="/">
          <button className="signout-button">Sign Out</button>
        </Link>
      </div>
    </div>
  );
}

export default MyAccount;
