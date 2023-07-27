"use server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const generateAnswer = async (codeData) => {
  try {
    const prompt = generatePromptFromData(codeData);
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
              "You are a web development instructor for a software engineering bootcamp.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });
    const responseData = await response.json();
    const content = responseData.choices[0]?.message?.content;
    return content || "";
  } catch (error) {
    return `Error fetching data: ${error.message}`;
  }
};

function generatePromptFromData(codeData) {
  const { css, javascript, html, studentQuestion } = codeData;

  // Generate the complete prompt with system messages
  const prompt = ` Provide answers related to different languages don't mention any problems that have to do with babel or the included script tags. The student wants to know: "${studentQuestion}"\n\nHere's the CSS code snippet they provided:\n\n${css}\n\nSystem: Here's the HTML code snippet they provided:\n\n${html}\n\n Here's the JavaScript code snippet they provided:\n\n${javascript}\n`;

  return prompt;
}
