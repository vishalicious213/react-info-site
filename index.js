function Header() {
    return (
        <header>
            <nav>
                <img className="nav-logo" src="./react-logo.png" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function AboutReact() {
    return (
        <section>        
            <h2>Fun facts about React</h2>
    
            <ul className="factoids">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </section>
    )
}

function LearnReact() {
    return (
        <section>
            <h2>Why I want to learn React</h2>

            <ul className="factoids">
                <li>To build web applications</li>
                <li>To get a high-paying web developer job</li>
                <li>To save my family and house</li>
            </ul>
        </section>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2023 React In Development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <AboutReact />
            <LearnReact />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
