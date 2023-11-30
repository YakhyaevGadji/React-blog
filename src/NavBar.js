import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar">
            <h1>React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New post</Link>
            </div>
        </nav>
    );
}

export default NavBar;