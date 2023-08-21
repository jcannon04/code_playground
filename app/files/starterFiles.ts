
import Files from "../types/projectFiles";
const starterFiles: Files = [
    {
        "languageId": 10,
        "fileName": "script.js",
        "sourceCode":
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
        "languageId": 10,
        "fileName": "style.css",
        "sourceCode": ``,
    },
    {
        "languageId": 10,
        "fileName": "index.html",
        "sourceCode": `<div id="app"></div>`,
    },
    {
        "languageId": 50,
        "fileName": "main.c",
        "sourceCode": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}"
    },
    {
        "languageId": 54,
        "fileName": "main.cpp",
        "sourceCode": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}"
    },
    {
        "languageId": 86,
        "fileName": "main.clj",
        "sourceCode": "(println \"Hello, World!\")"
    },
    {
        "languageId": 51,
        "fileName": "Program.cs",
        "sourceCode": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}"
    },
    {
        "languageId": 57,
        "fileName": "main.exs",
        "sourceCode": "IO.puts \"Hello, World!\""
    },
    {
        "languageId": 87,
        "fileName": "Program.fs",
        "sourceCode": "printfn \"Hello, World!\""
    },
    {
        "languageId": 60,
        "fileName": "main.go",
        "sourceCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n}"
    },
    {
        "languageId": 62,
        "fileName": "Main.java",
        "sourceCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
    },
    {
        "languageId": 63,
        "fileName": "script.js",
        "sourceCode": "console.log(\"Hello, World!\");"
    },
    {
        "languageId": 78,
        "fileName": "main.kt",
        "sourceCode": "fun main() {\n    println(\"Hello, World!\")\n}"
    },
    {
        "languageId": 64,
        "fileName": "main.lua",
        "sourceCode": "print(\"Hello, World!\")"
    },
    {
        "languageId": 79,
        "fileName": "main.m",
        "sourceCode": "#import <Foundation/Foundation.h>\n\nint main() {\n    @autoreleasepool {\n        NSLog(@\"Hello, World!\");\n    }\n    return 0;\n}"
    },
    {
        "languageId": 67,
        "fileName": "main.pas",
        "sourceCode": "program HelloWorld;\nbegin\n    WriteLn('Hello, World!');\nend."
    },
    {
        "languageId": 85,
        "fileName": "main.pl",
        "sourceCode": "print \"Hello, World!\\n\";"
    },
    {
        "languageId": 68,
        "fileName": "index.php",
        "sourceCode": "<?php\n    echo \"Hello, World!\";\n?>"
    },
    {
        "languageId": 70,
        "fileName": "main2.py",
        "sourceCode": "print \"Hello, World!\""
    },
    {
        "languageId": 71,
        "fileName": "main3.py",
        "sourceCode": "print(\"Hello, World!\")"
    },
    {
        "languageId": 80,
        "fileName": "main.R",
        "sourceCode": "cat(\"Hello, World!\\n\")"
    },
    {
        "languageId": 72,
        "fileName": "main.rb",
        "sourceCode": "puts \"Hello, World!\""
    },
    {
        "languageId": 73,
        "fileName": "main.rs",
        "sourceCode": "fn main() {\n    println!(\"Hello, World!\");\n}"
    },
    {
        "languageId": 81,
        "fileName": "Main.scala",
        "sourceCode": "object Main extends App {\n    println(\"Hello, World!\")\n}"
    },
    {
        "languageId": 82,
        "fileName": "query.sql",
        "sourceCode": "SELECT 'Hello, World!' AS message;"
    },
    {
        "languageId": 83,
        "fileName": "main.swift",
        "sourceCode": "print(\"Hello, World!\")"
    },
    {
        "languageId": 74,
        "fileName": "main.ts",
        "sourceCode": "console.log(\"Hello, World!\");"
    },


]


export default starterFiles;