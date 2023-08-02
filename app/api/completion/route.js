import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

export async function POST(req, res) {
  try {
    const codeData = await req.json();
    let prompt;

    if(!codeData.quiz) {
      prompt = generatePromptFromData(codeData);
    } else {
      prompt = generateQuiz(codeData);
    }

    const url = "https://api.openai.com/v1/chat/completions";
    const apiKey = process.env.OPENAI_API_KEY;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a web development instructor for a software engineering bootcamp answer student questions",
          },
          { role: "user", content: prompt },
        ],
        stream: true,
      }),
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    return Response.json(`Error fetching data: ${error.message}`);
  }
}

function generatePromptFromData(codeData) {
  const { css, js, html, prompt } = codeData;
  const codeSnippet = `
  <html>
  <head>
    <!-- Style tag containing the css styles written by student -->
      <style>${css}</style>
  </head>
  <body>
    <!-- You can assume that all of these script tags are up to date and working as intended -->
    <!-- React and React Dom scripts. These script tags allow the user to use react directly in this document without the need for any imports. All react methods and hooks can. be called by by using the React object i.e. React.useState() -->
      <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
      <!-- Babel standalone provides a script tag for compiling react in real time. Used to compile the student written react /js code. -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

      <!-- Beginning of students html -->
      ${html}
      <!-- End of Student Html -->

      <!-- All javascript / jsx / react code written by the student is included in this script tag they have access to react and react dom via the script tags and it will be compiled by babel standalone -->
      <script type="text/jsx">${js}</script>
  </body>
</html>
  `;

  const testPrompt = `code snippet with added instructor code:${codeSnippet}\n ${prompt}\n The only code I wrote the following code\ncss:${css}\njavascript${js}\nhtml:${html} Only supply answer related to the my questions and code. Dont mention errors that might occuring in the code the instructor wrote. The scripts tags containing the react, reactdom, and babel scripts were included by the instructor  so that the I could write react code without using import statements that will be compiled dynamically by babel standalone do not provide answers related to the script tags or missing imports. You can assume that the script tags are being loaded correctly and are up to date. Focus on syntax and logic errors found in my code . Give code examples and suggested solutions when possible`

  return testPrompt;
}

function generateQuiz() {
  return `
Generate a project or lab assignment for a web development student. The students are allowed to use html, css, javascript, and react. The project should be simple, something a new developer would be able to do on codepen or jsfiddle. The student will not be able to access a database or use external libraries. The assigment should include A title, a problem domain, and user stories that the student needs to complete it should be in the same format as this example:
Title: Odd Duck Products

Problem Domain:
Odd Duck Product Co is trying to decide which project from their R&D department they should invest in next to sell. They asked you to make a web page that they can run at a kiosk at the front entrance of their campus. Whenever an employee walks by, the employee can vote for 1 of the 3 products displayed that they think should be the next new product brought to market. After a week of collecting data, they would like some nice graphs to visualize the results...

User Stories: 
1. As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

Create a constructor function that creates an object associated with each product, and has the following properties:
Name of the product
File path of image
Times the image has been shown
Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

For each of the three images, increment its property of times it has been shown by one.

Attach an event listener to the section of the HTML page where the images are going to be displayed.

Once the users ‘clicks’ a product, generate three new products for the user to pick from.
2. ...
`;
}
