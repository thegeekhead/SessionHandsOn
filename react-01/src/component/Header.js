import { Link } from "react-router-dom"

const Header = () => {
  return (
    <ul>
      <Link to="/"><li>HOME</li></Link>
      <Link to="/profile"><li>PROFILE</li></Link>
      <Link to="/about"><li>ABOUT</li></Link>
    </ul>
  )
};

export default Header;