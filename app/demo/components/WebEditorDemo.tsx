import React from "react";
import ControlledEditor from "@monaco-editor/react";

const WebEditorDemo = ({
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
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
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
      <div
        id='preview'
        style={{ flex: 1, height, border: "1px solid #ccc" }}
      ></div>
    </div>
  );
};

export default WebEditorDemo;