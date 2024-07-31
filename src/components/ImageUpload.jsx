import { useState } from "react";
import { Button, Input, Box } from "@mui/material";

function ImageUpload({ isChecked, selectedFile, setSelectedFile }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      console.log(selectedFile);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        sx={{ display: "none" }}
        id="image-upload-input"
      />
      <label htmlFor="image-upload-input">
        <Button variant="contained" component="span">
          Choose Image
        </Button>
      </label>
      {selectedFile && (
        <>
          <Box sx={{ mt: 2 }}>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              style={{ width: "100%", maxWidth: "300px", height: "auto" }}
            />
          </Box>
          {isChecked && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleUploadClick}
              disabled={!selectedFile}
            >
              Upload
            </Button>
          )}
        </>
      )}
    </Box>
  );
}

export default ImageUpload;
