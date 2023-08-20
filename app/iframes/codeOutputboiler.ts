
const codeOutputBoiler = (output: string) => {
    return (
        `
        <html>
            <head>
                <style></style>
            </head>
            <body>
                <pre>${output}</pre>
                <script type="text/jsx"></script>
            </body>
        </html>
        `
    )
}
export default codeOutputBoiler;