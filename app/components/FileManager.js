
const FileManager = ({handleFileChange, handleRunClick, fileName}) => {
    const buttonStyles = {
        fontFamily: "monospace",
        backgroundColor: "rgb(31, 31, 31)",
        color: "rgb(15, 228, 15)",
        borderRadius: "4px",
        padding: "10px 20px",
        cursor: "pointer",
        marginBottom: "2px",
        transition: "background-color 0.2s",
      };
      const buyMeACoffeeStyles = {
        height: "40px !important",
        width: "145px !important",
      };
      const buttonDivStyles = {
        display: "flex",
      };
  return (
    <div style={buttonDivStyles}>
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
    <button
      onClick={handleRunClick}
      style={{ ...buttonStyles, backgroundColor: "blue" }}
    >
      Run
    </button>
    <a href='https://www.buymeacoffee.com/cannontech' target='_blank'>
      <img
        src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
        alt='Buy Me A Coffee'
        style={buyMeACoffeeStyles}
      />
    </a>
  </div>
  )
}

export default FileManager