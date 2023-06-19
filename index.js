function AboutReact() {
    return (
        <section>
            <img src="./react-logo.png" />
        
            <h2>Fun facts about React</h2>
    
            <ul>
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

            <ul>
                <li>To build web applications</li>
                <li>To get a high-paying web developer job</li>
                <li>To save my family and house</li>
            </ul>
        </section>
    )
}

ReactDOM.render(<LearnReact />, document.getElementById("root"))
