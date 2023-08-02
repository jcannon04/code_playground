// runs on server only working on moving the rest of judge.js needs error handling
"use server";
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
export async function createSubmission(input, languageId) {
  const response = await fetch("http://159.203.136.237:2358/submissions/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      source_code: input,
      language_id: languageId,
    }),
  });

  const submissionResponse = await response.json();
  return submissionResponse;
}
