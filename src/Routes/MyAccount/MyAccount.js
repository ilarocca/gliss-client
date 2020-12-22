import { Link } from "react-router-dom";
function MyAccount() {
  return (
    <div>
      <div>
        <h2>No seriously, where's my plate?</h2>
        <Link to="/">
          <button>Sign Out</button>
        </Link>
      </div>
    </div>
  );
}

export default MyAccount;
