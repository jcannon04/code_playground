import React from "react";
import ControlledEditor from "@monaco-editor/react";

const WebEditor = ({
  height,
  theme,
  path,
  defaultLanguage,
  defaultValue,
  onChange,
  options,
  beforeMount,
}) => {
  return (
    
      <div style={{ flex: 2 }}>
        <ControlledEditor
          height={height}
          theme={theme}
          path={path}
          defaultLanguage={defaultLanguage}
          defaultValue={defaultValue}
          onChange={onChange}
          options={options}
          beforeMount={beforeMount}
        />
      </div>
  );
};

export default WebEditor;
