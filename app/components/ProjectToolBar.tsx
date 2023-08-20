import PreviewNav from "./previewNav";
import FileManager from "./FileManager";
const ProjectToolBar = ({
  handleSwitchToChat,
  handleSwitchToLab,
  handleSwitchToPreview,
  mode,
  handleFileChange,
  handleRunClick,
  fileName,
  displayFiles,
  handleSaveClick,
  isRunLoading,
  isSaveLoading,
  isWebMode,
  currentFile,
  languageId
}) => {
  return (
    <>
      <PreviewNav
        handleSwitchToChat={handleSwitchToChat}
        handleSwitchToLab={handleSwitchToLab}
        handleSwitchToPreview={handleSwitchToPreview}
        mode={mode}
      />
      <FileManager
        handleFileChange={handleFileChange}
        handleRunClick={handleRunClick}
        fileName={currentFile?.fileName}
        displayFiles={isWebMode(languageId)}
        handleSaveClick={handleSaveClick}
        isRunLoading={isRunLoading}
        isSaveLoading={isSaveLoading}
      />
    </>
  );
};

export default ProjectToolBar;
