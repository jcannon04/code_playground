const chatIframeBoiler = (css, js, html, generateAnswer) => {
  const textAreaStyles = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "none",
    marginBottom: "8px",
    marginRight: "10px",
    height: "50%",
  };
  const buttonStyles = {
    fontFamily: "monospace",
    backgroundColor: "rgb(31, 31, 31)",
    color: "rgb(15, 228, 15)",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    marginBottom: "2px",
    transition: "background-color 0.2s",
    float: "right",
  };
  async function getAnswer(js, css, html, question) {
    const response = await fetch("/api/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        css,
        html,
        js,
        question,
      }),
    });

    answer = await response.json();
    chatResponseTextArea.value = answer;
  }
  // Convert the textAreaStyles object into a valid CSS string
  const styleString =
    Object.entries(textAreaStyles)
      .map(([property, value]) => `${property}: ${value};`)
      .join(" ") + "border-radius: 4px; margin-bottom: 2px;";

  const buttonStyleString =
    Object.entries(buttonStyles)
      .map(([property, value]) => `${property}: ${value};`)
      .join(" ") + "background-color: rgb(31, 31, 31);";

  return `
  <html>

  <head>
  </head>
  
  <body>
      <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  
      <textarea
            id="chatResponseTextArea"
            rows='30'
            cols='50'
            disabled
            style="${styleString}"
          ></textarea>
      <textarea
          id="chatQuestionTextArea"
          rows='4' 
          cols='50'
          placeholder="Ask your question here..."
          style="${styleString}"
        ></textarea>
      <button style="${buttonStyleString}" id="testButton">Submit</button>
  
      <script>
          const chatQuestionTextArea = document.getElementById("chatQuestionTextArea");
            const chatResponseTextArea = document.getElementById("chatResponseTextArea");
            const generateAnswer = ${generateAnswer};
            const getAnswer = ${getAnswer};
            
            const testButton = document.getElementById("testButton");
            testButton.addEventListener("click", async () => {
              const question = chatQuestionTextArea.value;
              const js = ${JSON.stringify(js)};
              const css = ${JSON.stringify(css)};
              const html = ${JSON.stringify(html)};
              getAnswer(js, css, html, question);
            });
  
      </script>
  </body>
  
  </html>
  `;
};

export default chatIframeBoiler;
