

const buttonStyles: React.CSSProperties = {
    fontFamily: "monospace",
    backgroundColor: "rgb(31, 31, 31)",
    color: "rgb(15, 228, 15)",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    marginBottom: "2px",
    transition: "background-color 0.2s",
    float: "right",
  };

const PreviewNav = ({handleSwitchToPreview, handleSwitchToChat, handleSwitchToLab, mode}) => {
  return (
    <div>
      {" "}
      <button
        style={
          mode == "preview" ? { ...buttonStyles, opacity: "0.6" } : buttonStyles
        }
        onClick={(e) => handleSwitchToPreview()}
      >
        Preview
      </button>
      <button
        style={
          mode == "chat" ? { ...buttonStyles, opacity: "0.6" } : buttonStyles
        }
        onClick={(e) => handleSwitchToChat()}
      >
        Chat
      </button>
      <button
        style={
          mode == "quiz" ? { ...buttonStyles, opacity: "0.6" } : buttonStyles
        }
        onClick={(e) => handleSwitchToLab()}
      >
        Lab
      </button>
    </div>
  );
};

export default PreviewNav;
