import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const SharedLayout = () => {
    return (
      <div>
        <header>
          <h1>Shared Layout</h1>
          <Link to="/">Main</Link>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/register">Register</Link>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
}

export default SharedLayout;