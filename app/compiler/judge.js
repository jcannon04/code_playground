// Needs to be moved to server side to hide api key in production.

import { createSubmission } from "./judgeServerSubmission";
const compile = async (input, languageId) => {
  try {
    const jsonResponse = await createSubmission(input, languageId);
    let jsonGetSolution;

    while (
      jsonGetSolution?.status?.description !== "Accepted" &&
      jsonGetSolution?.stderr == null &&
      jsonGetSolution?.compile_output == null
    ) {
      if (jsonResponse?.token) {
        const getSolution = await fetch(
          `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`,
          {
            headers: {
              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
              "x-rapidapi-key": "Your API Key Here",
              "content-type": "application/json",
            },
          }
        );
        jsonGetSolution = await getSolution.json();
      }
    }

    if (jsonGetSolution.stdout) {
      const decodedOutput = atob(jsonGetSolution.stdout);

      return `Results:\n${decodedOutput}\nExecution Time: ${jsonGetSolution.time} Secs\nMemory used: ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);
      return `Error:\n${error}`;
    } else {
      const compilationError = atob(jsonGetSolution.compile_output);
      return `Error:\n${compilationError}`;
    }
  } catch (error) {
    console.error(error);
    return `Error: ${error.message}`;
  }
};

export { compile };
