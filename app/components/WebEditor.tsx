import ControlledEditor from "@monaco-editor/react";

const editorOptions = {
  fontSize: 16,
};

const WebEditor = ({
  height,
  theme,
  path,
  defaultLanguage,
  onChange,
  beforeMount,
  source,
}) => {
  const language =
    path === "style.css"
      ? "css"
      : path === "index.html"
      ? "html"
      : defaultLanguage;

  return (
    <div style={{ flex: 2 }}>
      <ControlledEditor
        height={height}
        theme={theme}
        path={path}
        language={language}
        value={source}
        onChange={onChange}
        options={editorOptions}
        beforeMount={beforeMount}
      />
    </div>
  );
};

export default WebEditor;
