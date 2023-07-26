import '../styles/header.css'

function Header() {
    return (
        <header>
            <div id="header">
                <h1>Sana Portfolio.</h1>
            </div>
            <ul id="menu">
                <li><a href="#aboutid">About</a></li>
                <li><a href="#contactid">Contact</a></li>
                <li><a href="#workid">My Work</a></li>
                <li><a href="#skillid">Resume</a></li>
            </ul>
        </header>
    );
}


export default Header;