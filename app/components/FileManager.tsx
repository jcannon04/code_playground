
import Spinner from "./Spinner";
const buttonStyles = {
  display: "inline-block",
  fontFamily: "monospace",
  backgroundColor: "rgb(31, 31, 31)",
  color: "rgb(15, 228, 15)",
  borderRadius: "4px",
  padding: "10px 20px",
  cursor: "pointer",
  marginBottom: "2px",
  transition: "background-color 0.2s",
  minWidth: "72.5px",
  justifyContent: "center"
  
};

const buyMeACoffeeStyles = {
  height: "40px",
  width: "145px",
};

const buttonDivStyles = {
  display: "flex",
  width: "66.6%"
};

const FileManager = ({
  handleFileChange,
  handleRunClick,
  fileName,
  displayFiles,
  handleSaveClick,
  isSaveLoading,
  isRunLoading
}) => {
  return (
    <div style={buttonDivStyles}>
      {displayFiles && (
        <div style={{marginRight: "auto"}}>
          <button
            style={
              fileName === "script.js"
                ? { ...buttonStyles, opacity: 0.6 }
                : buttonStyles
            }
            onClick={() => handleFileChange("script.js")}
          >
            script.js
          </button>
          <button
            style={
              fileName === "style.css"
                ? { ...buttonStyles, opacity: 0.6 }
                : buttonStyles
            }
            onClick={() => handleFileChange("style.css")}
          >
            style.css
          </button>
          <button
            style={
              fileName === "index.html"
                ? { ...buttonStyles, opacity: 0.6 }
                : buttonStyles
            }
            onClick={() => handleFileChange("index.html")}
          >
            index.html
          </button>
        </div>
      )}
      <button
        onClick={handleRunClick}
        style={{ ...buttonStyles, backgroundColor: "blue", color: "white" }}
      >
        {isRunLoading ? <Spinner /> : "Run"}
      </button>
      <button
        onClick={handleSaveClick}
        style={{ ...buttonStyles, backgroundColor: "green", color: "white" }}
      >
        {isSaveLoading ? <Spinner /> : "Save"}
      </button>
      <a href='https://www.buymeacoffee.com/cannontech' target='_blank'>
        <img
          src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
          alt='Buy Me A Coffee'
          style={buyMeACoffeeStyles}
        />
      </a>
    </div>
  );
};

export default FileManager;
