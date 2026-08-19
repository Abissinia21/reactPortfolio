function Home() {
    return (
        <section id="home">

            <div className="home-content">

                <h1>
                    Hi, I'm <span>Adoniyas</span>
                </h1>

                <h2>
                    Computer Science Student | Frontend Developer
                </h2>

                <p>
                    I'm a Computer Science student passionate about
                    building modern and responsive web applications.
                    I'm currently learning React, Node.js, C++ and
                    full-stack development.
                </p>

                <div className="home-buttons">
                    <a href="#project">View Projects</a>
                    <a href="#contact">Contact Me</a>
                </div>

            </div>


            <div className="home-image">

                <img
                    src="my1.jpg"
                    alt="Adoniyas"
                />

            </div>

        </section>
    );
}

export default Home;