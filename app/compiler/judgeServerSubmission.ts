// runs on server only working on moving the rest of judge.js needs error handling
"use server";
import fs from 'fs/promises'
export async function createSubmission(input, languageId, additionalFiles) {
  if (additionalFiles) {
    try {
      const filesZipContent = await fs.readFile("public/files.zip");
      additionalFiles = filesZipContent.toString('base64')

    } catch (error) {
      throw error
    }
  }
  try {
      let body = getBody(input, languageId, additionalFiles);
      const response = await fetch(`http://159.203.136.237:2358/submissions/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: body,
      });
      const submissionResponse = await response.json();
      return submissionResponse;
    } catch (error) {
      throw error
    }
}

function getBody(input, languageId, additionalFiles) {
  if (additionalFiles) {
    return JSON.stringify({
      source_code: input,
      language_id: languageId,
      additional_files: additionalFiles,
    });
  } else {
    return JSON.stringify({
      source_code: input,
      language_id: languageId,
    });
  }
}
