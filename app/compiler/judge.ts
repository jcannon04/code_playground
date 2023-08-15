// Needs to be moved to server side to hide api key in production. needs more error handling

import { createSubmission } from "./judgeServerSubmission";
const TIMEOUT_MS = 10000;
const compile = async (input, languageId, additionalFiles) => {
  if(input.length == 0){
    return `No source code available`;
  }
  
  try {
    const jsonResponse = await createSubmission(input, languageId, additionalFiles);

    let jsonGetSolution;
    const startTime = Date.now();

    while (
      jsonGetSolution?.status?.description !== "Accepted" &&
      jsonGetSolution?.stderr == null &&
      jsonGetSolution?.compile_output == null
    ) {
      if (jsonResponse?.token) {
        const getSolution = await fetch(
          `http://159.203.136.237:2358/submissions/${jsonResponse.token}?base64_encoded=true`,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        jsonGetSolution = await getSolution.json();
      }
      if (Date.now() - startTime > TIMEOUT_MS) {
        return `Server Timed Out Retrieving response You can access your result with this token: ${jsonResponse?.token}`;
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
    return `Error: ${error.message}`;
  }
};

export { compile };