import fs from 'fs/promises'
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
    const {input, languageId, additionalFiles} = await request.json();
    const TIMEOUT_MS = 10000;
    
    if(input.length == 0){
        return `No source code available`;
    }
    let b64additionalFiles : string;
    if (additionalFiles) {
        try {
          const filesZipContent = await fs.readFile('public/files.zip');
          b64additionalFiles = filesZipContent.toString('base64');
        } catch (error) {
            return `Error:\n${error}`
        }
      }

      try {
        let body = getBody(input, languageId, b64additionalFiles);
        const response = await fetch(`${process.env.JUDGE_SUBMISSIONS_URL}/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: body,
        });

    
        let jsonGetSolution;
        const startTime = Date.now();
        const jsonResponse = await response.json();
        while (
          jsonGetSolution?.status?.description !== "Accepted" &&
          jsonGetSolution?.stderr == null &&
          jsonGetSolution?.compile_output == null
        ) {
          if (jsonResponse.token) {
            const getSolution = await fetch(
              `${process.env.JUDGE_SUBMISSIONS_URL}/${jsonResponse.token}?base64_encoded=true`,
              {
                headers: {
                  "content-type": "application/json",
                },
              }
            );
            jsonGetSolution = await getSolution.json();
          }
          if (Date.now() - startTime > TIMEOUT_MS) {
            return NextResponse.json(`Server Timed Out Retrieving response You can access your result with this token: ${jsonResponse?.token}`);
          }
        }
        if (jsonGetSolution.stdout) {
          const decodedOutput = atob(jsonGetSolution.stdout);
    
          return NextResponse.json(`Results:\n${decodedOutput}\nExecution Time: ${jsonGetSolution.time} Secs\nMemory used: ${jsonGetSolution.memory} bytes`);
        } else if (jsonGetSolution.stderr) {
          const error = atob(jsonGetSolution.stderr);
          return NextResponse.json(`Error:\n${error}`);
        } else {
          const compilationError = atob(jsonGetSolution.compile_output);
          return NextResponse.json(`Error:\n${compilationError}`);
        }
      } catch (error) {
        return NextResponse.json(`Error: ${error.message}`);
      }
    };

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