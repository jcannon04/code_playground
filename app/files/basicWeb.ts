import Files from "../types/projectFiles";
const starterFiles: Files  = [
    {
        languageId: 10,
        fileName: "script.js",
        sourceCode: 
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
    `
    },
    {
        languageId: 10,
        fileName: "style.css",
        sourceCode: ``,
    },
    {
        languageId: 10,
        fileName: "index.html",
        sourceCode: `<div id="app"></div>`,
    }
]


export default starterFiles;