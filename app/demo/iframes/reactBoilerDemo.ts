const reactIframeBoiler = (css, html, javascript) => {
    return (
        `
        <html>
            <head>
                <style>${css.value}</style>
            </head>
            <body>
                <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
                <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
                <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                ${html.value}
                <script type="text/jsx">${javascript.value}</script>
            </body>
        </html>
        `
    )
}
export default reactIframeBoiler;