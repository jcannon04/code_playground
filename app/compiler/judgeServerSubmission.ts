// runs on server only working on moving the rest of judge.js needs error handling
"use server";
import fs from 'fs/promises'
import path from 'path';
export async function createSubmission(input, languageId, additionalFiles) {
  if (additionalFiles) {
    try {
      const scriptUrl = new URL(import.meta.url);
      const scriptPath = path.dirname(scriptUrl.pathname);
      const filesZipPath = path.join(scriptPath, 'files.zip');

      const filesZipContent = await fs.readFile(filesZipPath);
      additionalFiles = filesZipContent.toString('base64');

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
