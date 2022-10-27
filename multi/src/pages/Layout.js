import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav id="navBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Best Songs</Link>
          </li>
          <li>
            <Link to="/contact">Worst Songs</Link>
          </li>
        </ul>
      </nav>
     

      <Outlet />
       <footer> link </footer>
    </>
    
  )
};

export default Layout;