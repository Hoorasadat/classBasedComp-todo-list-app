import "./Header.css";
import logo from "../assets/logo.png";

const Header = () =>{
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>My Todo List</h1>
        </header>
    );
}

export default Header;
