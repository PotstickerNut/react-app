import "./App.css";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
};

export const About = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
};

export const History = () => {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
};

export const Contact = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
};

export function App() {
  return <Home />;
}
