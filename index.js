// VERSION 3: Rendering a React Custom Component

function Section() {
    return (
        <section>
            <img src="./react-logo.png" />
        
            <h1>Fun facts about React</h1>
    
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

ReactDOM.render(<Section />, document.getElementById("root"))


// VERSION 2: Rendering a function with JSX

// function section() {
//     return (
//         <section>
//             <img src="./react-logo.png" />
        
//             <h1>Fun facts about React</h1>
    
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on Github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </section>
//     )
// }

// ReactDOM.render(section(), document.getElementById("root"))


// VERSION 1: Rendering a const with JSX

// const section = (
//     <section>
//         <img src="./react-logo.png" />
    
//         <h1>Fun facts about React</h1>

//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </section>
// )

// ReactDOM.render(section, document.getElementById("root"))