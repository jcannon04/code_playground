// move to /app/repl/page.js and create a different home page
"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  Center,
  ChakraProvider,
  Divider,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Textarea,
} from "@chakra-ui/react";

import ControlledEditor from "@monaco-editor/react";
import { compile } from "./compiler/judge";

const languages = {
  python: 71,
  cpp: 54,
  java: 62,
  javascript: 63,
  csharp: 51,
};

const Compiler = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Output :");
  const [language, setLanguage] = useState("python");
  const [languageId, setLanguageId] = useState(71);
  const [theme, setTheme] = useState("vs-light");

  useEffect(() => {
    // Import the Monaco Editor and other browser-specific dependencies here
    import("monaco-editor/esm/vs/editor/editor.api");
    import("monaco-editor/esm/vs/basic-languages/python/python.contribution");
    import("monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution");
    import("monaco-editor/esm/vs/basic-languages/java/java.contribution");
    import(
      "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"
    );
    import("monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution");
  }, []);

  const handleInput = (value) => {
    setInput(value);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
    setLanguageId(languages[language]);
  };

  const handleThemeChange = () => {
    setTheme(() => {
      return theme === "vs-light" ? "vs-dark" : "vs-light";
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await compile(input, languageId);
    setOutput(result);
  };

  return (
    <ChakraProvider>
      <Center h={"100vh"}>
        <VStack
          boxShadow={"md"}
          p={4}
          borderStyle={"solid"}
          borderWidth={1}
          rounded={"lg"}
        >
          <HStack w={"100%"} justify={"space-between"}>
            <Heading>Code Editor</Heading>
            <HStack>
              <Button onClick={() => handleThemeChange(theme)}>
                Switch Theme
              </Button>
              <Menu>
                <MenuButton as={Button}>{language}</MenuButton>
                <MenuList>
                  {Object.keys(languages).map((lang) => (
                    <MenuItem
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {lang}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Button onClick={handleSubmit}>
                <i className='fas fa-cog fa-fw'></i> Run
              </Button>
            </HStack>
          </HStack>

          <Divider />

          <ControlledEditor
            language={language}
            value={input}
            options={{
              automaticLayout: true,
              theme: theme,
            }}
            onChange={(value) => handleInput(value)}
            width='800px'
            height='500px'
          />

          <Textarea
            id='output'
            value={output}
            readOnly
            minWidth={"800px"}
            minHeight={"150px"}
            backgroundColor={"black"}
            color={"white"}
          />
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default Compiler;
