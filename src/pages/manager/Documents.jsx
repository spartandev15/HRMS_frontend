import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./css/Documents.css"; // Import the custom CSS file
import { FaTimes } from "react-icons/fa"; // Import FontAwesome Times icon

const MAX_FILE_SIZE_MB = 1; // 1 MB

const Documents = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    const validFiles = [];
    let errorMsg = "";

    newFiles.forEach((file) => {
      if (file.size / 1024 / 1024 > MAX_FILE_SIZE_MB) {
        errorMsg = "File size must be less than 1 MB.";
      } else {
        validFiles.push(file);
      }
    });

    if (errorMsg) {
      setError(errorMsg);
    } else {
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      setError("");
    }
  };

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleFileRemove = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
    // Clear selected file if it was the one removed
    if (selectedFile === fileToRemove) {
      setSelectedFile(null);
    }
  };

  function truncateString(str, maxLength, ellipsis = "...") {
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength) + ellipsis;
  }

  const renderPreview = () => {
    if (!selectedFile) return <p>No document selected</p>;

    const fileURL = URL.createObjectURL(selectedFile);
    const fileType = selectedFile.type;

    if (fileType.startsWith("image/")) {
      return <img src={fileURL} alt="Preview" className="preview-image" />;
    }

    if (fileType === "application/pdf") {
      return (
        <div style={{ height: "500px" }}>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={fileURL} />
          </Worker>
        </div>
      );
    }

    return <p>Unsupported file type</p>;
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="sechrcard shadow">
                <div className="container">
                  <div className="row pb-5">
                    <div className="col-4  text-start">
                      <div class="heading-text-msg">
                        <h5 class="m-0">Upload and Preview Documents</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-4">
                      <p class="lead blockquote-footer">
                        Please rename files before upload to make them
                        identical.
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="image/jpeg, image/png, application/pdf"
                        onChange={handleFileChange}
                        className="form-control-file mb-3"
                      />
                      {error && (
                        <div className="alert alert-danger">{error}</div>
                      )}
                      <ul className="list-group">
                        {files.map((file, index) => (
                          <li
                            key={index}
                            className={`list-group-item d-flex justify-content-between align-items-center ${
                              file === selectedFile ? "selected" : ""
                            }`}
                            onClick={() => handleFileClick(file)}
                          >
                            {truncateString(file.name, 20)}
                            <i
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering file click
                                handleFileRemove(file);
                              }}
                            >
                              <FaTimes />
                            </i>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-8">
                      <div className="preview-container">{renderPreview()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Documents;
