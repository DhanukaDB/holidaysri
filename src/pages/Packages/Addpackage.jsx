import React, { useState, useEffect} from "react";
import { Box, Button, Typography, Modal, Grid ,Select,} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Customtextfield from "../../components/hotel/Login/Customtextfield";
import axios from "axios"; 
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 640, xs: 250 },
  maxHeight: "80vh", // Set maximum height to 80% of the viewport height
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
  overflowY: "auto", // Enable vertical scrolling
};
const Addpackage = (props) => {
  const [openlocation, setOpenlocation] = React.useState(false);
  const [editingLocation, setEditingLocation] = useState("");
  const [editingEvent, setEditingEvent] = useState("");
  const handleOpenlocation = () => setOpenlocation(true);
  const handleCloselocation = () => setOpenlocation(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  

  const [event,setEvent] = useState([]);
  const [images, setImages] = useState([]);
  const [packageName, setpackageName] = useState("");
  const [category,setcategory,] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [activities, setactivities] = useState("");
  const handleClose = () => {setOpen(false);
   
  }
  
  const handleFileChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    // Handle the selected images, you may want to upload them or perform other actions
    setImages(selectedImages);
  };


  const handleChange = (event) => {
    setLocation(event.target.value);
  };



const handleEditEvent = (event) => {
  setEditingEvent(event);
  setpackageName(event.packageName);
  setcategory(event.category);
  setImages(event.images);
  setDescription(event.description);
  setLocation(event.location);
  setPrice(event.price);
  setactivities(event.activities);
  setOpen(true); // Open the modal for editing
};


const handleAddEvent = (e) => {
  e.preventDefault();

  const newEvent = {
    category,
    location,
    description,
    price,
    activities,
    images
  };

  if (editingEvent) {
    axios
      .put(
        `https://holidaysri-backend.onrender.com/package/updatePackage/${editingEvent._id}`,
        newEvent
      )
      .then(() => {
        alert("The Package was Successfully updated");
        window.location = `/add-package`; 
      })
      .catch((err) => {
        alert(err);
      });
  } else {
    // Otherwise, add a new event
    axios
      .post("https://holidaysri-backend.onrender.com/package/add", newEvent)
      .then(() => {
        alert("The New package was Successfully added");
        window.location = `/add-package`; // Redirect to location page after adding
      })
      .catch((err) => {
        alert(err);
      });
  }
};


useEffect(() => {
  async function getAllEvents() {
      try {
          const res = await axios.get("https://holidaysri-backend.onrender.com/package/");
          setEvent(res.data);
      } catch (error) {
          console.error("Error fetching Events:", error);
          alert("Error fetching Events: " + error.message);
      }
  }
  getAllEvents();
}, []);



function handleDeleteEvent(id){

const r = window.confirm ("Do you really want to Delete this Event?"); 
if(r ==true){
    axios.delete(`https://holidaysri-backend.onrender.com/package/delete/${id}`).then ((res)=>{
        alert("Delete Successfully");
        window.location = `/add-package`;
        setEvent()
    })
}
}



  return (
    <div style={{paddingTop: "16px", paddingBottom: "16px",backgroundImage:
    'url("https://res.cloudinary.com/iplus/image/upload/v1709990615/pexels-alex-azabache-3723035_1_xs9aso.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh", }}>
      <Box sx={{backgroundColor: 'rgba(0, 0, 0, 0.8)',margin:{lg:'40px',xs:'16px'},padding:{lg:'24px',xs:'10px'},borderRadius:'20px'}}>
        <Box textAlign="center" marginTop={{ lg: "4%", xs: "4%" }}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "inter",
              marginTop: "8px",
              fontSize: { lg: "50px", xs: "18px" },
              letterSpacing: "20px",
            }}
          >
            Add Packages
          </Typography>
        </Box>
        <Grid container justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: { lg: "1100px", xs: "300px" },
            }}
            marginTop="40px"
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                borderColor: "black",
                boxShadow: "none",
                width: { lg: "200px", xs: "48%" },
                backgroundColor: "white",
                color: "black",
                marginTop: { lg: "32px", xs: "20px" },
                height: "48px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                  boxShadow: "none",
                },
              }}
              onClick={handleOpen}
            >
              ADD PACKAGE
            </Button>
          </Box>
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
        
            <Typography marginTop="16px" >Select Location</Typography>
        <Select
        sx={{width:'60%',marginTop:'8px'}}
          id="demo-simple-select"
          value={location}
          onChange={handleChange}
        > 
          <MenuItem value={"Kandy"}>Kandy</MenuItem>
          <MenuItem value={"Colombo"}>Colombo</MenuItem>
          <MenuItem value={"Galle"}>Galle</MenuItem>
          <MenuItem value={"Nuwara eliya"}>Nuwara eliya</MenuItem>
          <MenuItem value={"Anuradhapura"}>Anuradhapura</MenuItem>
        </Select>
            
            <Customtextfield label="Package name"  value={packageName} onChange={(e) => setpackageName(e.target.value)}  marginTop="8px" />
            <div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="uploadImageInput"
                onChange={handleFileChange}
                multiple 
              />
              <label htmlFor="uploadImageInput">
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderRadius: "30px",
                    borderColor: "black",
                    "&:hover": {
                      color: "black",
                      borderRadius: "30px",
                      borderColor: "black",
                    },
                    marginTop: "16px",
                    marginBottom: "16px",
                  }}
                  component="span"
                >
                  Upload image
                </Button>
              </label>

              
            </div>
            <Customtextfield label="pack" placeholder="Example: 10 pack"  value={category} onChange={(e) => setcategory(e.target.value)}  marginTop="8px" />
            <Customtextfield label="price"  value={price} onChange={(e) => setPrice(e.target.value)}  marginTop="8px" />

            <Customtextfield label="Activities"  value={activities} onChange={(e) => setactivities(e.target.value)}  marginTop="8px" />

            <Customtextfield label="Description"  value={description} onChange={(e) => setDescription(e.target.value)}  marginTop="8px" />

            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                borderRadius: "30px",
                borderColor: "black",
                boxShadow: "none",
                width: { lg: "48%", xs: "48%" },
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
              Cancel
            </Button>{" "}
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                borderColor: "black",
                boxShadow: "none",
                width: { lg: "50%", xs: "50%" },
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

              onClick={handleAddEvent}
            >
              Add
            </Button>
          </Box>
        </Modal>

        

        <Grid container justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: { lg: "1100px", xs: "300px" },
            }}
          >
            <Typography
              fontSize={{ lg: "24px", xs: "22px" }}
              sx={{ color: "white" }}
              marginTop="32px"
            >
              Added Events:
            </Typography>
          </Box>
          <> 
          {event.map(event => (
            <Box
              key={event._id}
              border={3}
              sx={{
                width: { lg: "1100px", xs: "280px" },
                borderColor: "black",
                borderRadius: "30px",
                backgroundColor: "rgba(48, 103, 84, 0.5)",
                padding: "24px",
                marginTop: { lg: "16px", xs: "16px" },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} lg={2}>
                  <Box width={{ lg: "100%" }} height={{ lg: "100%" }}>
                    <img
                      src="https://www.archaeology.lk/wp-content/uploads/2020/11/galle_fort_sri_lanka_aerial_view_buddhika_dilshan.jpg"
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "30px" }}
                      alt="image_1"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={10}>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "24px", xs: "20px" },
                      textAlign: "left",
                    }}
                  >
                    Location :  {event.location}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "16px", xs: "16px" },
                      textAlign: "left",
                      marginTop: "8px",
                    }}
                  >
                    Package Name :  {event.packageName}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "16px", xs: "16px" },
                      textAlign: "left",
                      marginTop: "8px",
                    }}
                  >
                    Pack  :  {event.category}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "16px", xs: "16px" },
                      textAlign: "left",
                      marginTop: "8px",
                    }}
                  >
                    Price  :  {event.price}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "16px", xs: "16px" },
                      textAlign: "left",
                      marginTop: "8px",
                    }}
                  >
                    Activities:  {event.activities}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "16px", xs: "16px" },
                      textAlign: "left",
                      marginTop: "8px",
                    }}
                  >
                    Description:  {event.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      borderRadius: "30px",
                      marginTop: "16px",
                    }}
                    onClick = {() =>handleEditEvent(event)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      borderRadius: "30px",
                      marginTop: "16px",
                    }}
                    onClick = {() =>handleDeleteEvent(event._id)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
             ))}
          </>
          {/*.map ends */}
        </Grid>
      </Box>
    </div>
  );
};

export default Addpackage;
