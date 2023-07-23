// runs on server only working on moving the rest of judge.js needs error handling
"use server";
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
export async function createSubmission(input, languageId) {
  const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions", {
    method: "POST",
    headers: {
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "x-rapidapi-key": RAPIDAPI_KEY, // Replace this with your RapidAPI key
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

