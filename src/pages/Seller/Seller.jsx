import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import Customtextfield from "../../components/hotel/Login/Customtextfield";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Seller = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    // Handle the selected images, you may want to upload them or perform other actions
    setImages(selectedImages);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Customtextfield label="Product name" />
          <Customtextfield label="Product Category" />
          <Customtextfield label="Product Type" />
          <Customtextfield label="Price" />
          <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="uploadImageInput"
        onChange={handleFileChange}
        multiple // Allow multiple file selection
      />
      <label htmlFor="uploadImageInput">
        <Button
          variant="outlined"
          sx={{
            color: 'black',
            borderRadius: '30px',
            borderColor: 'black',
            '&:hover': {
              color: 'black',
              borderRadius: '30px',
              borderColor: 'black',
            },
            marginTop: '16px',
            marginBottom: '16px',
          }}
          component="span"
        >
          Upload images
        </Button>
      </label>

      {/* Display selected images (if needed) */}
      <div>
        {images.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }} />
        ))}
      </div>
    </div>
          <Customtextfield label="Description" />
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              borderColor: "black",
              boxShadow: "none",
              width: { lg: "100%", xs: "100%" },
              color: "black",
              marginTop: "32px",
              height: "48px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                borderColor: "black",
                boxShadow: "none",
              },
            }}
          >
            Add
          </Button>
        </Box>
      </Modal>
      <Box></Box>
    </div>
  );
};

export default Seller;
