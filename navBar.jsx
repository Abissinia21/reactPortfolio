function Nav() {
    return (
        <nav className="container">

            <div className="logo">
                <img src="my.png" alt="Adoniyas logo" />
                <span>Adu</span>

                <button id="theme-toggle">
                    <i className="fa-solid fa-moon"></i>
                </button>
            </div>

            <div className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#github">GitHub</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </nav>
    );
}

export default Nav;