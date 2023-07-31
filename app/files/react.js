const starterFiles = {
    "script.js": {
      name: "script.js",
      language: "javascript",
      value: 
`
const app = document.getElementById("app")

function Header({ title }) {
    return <h1>{title ? title : "Default title"}</h1>
}

function HomePage() {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

    const [likes, setLikes] = React.useState(0)

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />

            <ul>
                {names.map((name) => (
                <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    )
}

ReactDOM.render(<HomePage />, app)
`,
    }, //script.js

    "style.css": {
      name: "style.css",
      language: "css",
      value: ``,
    }, //style.css

    "index.html": {
      name: "index.html",
      language: "html",
      value: `<div id="app"></div>`,
    }, //index.html
};

export default starterFiles;