//react imports
import React, { useState } from "react";

//Third Party Imports
import { TextField, Typography, Grid, Box } from "@mui/material";


const Customtextfield = (props: { [x: string]: any; error: any; label: any; width: any; height: any; marginTop: any; marginBottom: any; marginLeft: any; MarginRight: any; }) => {
  const {
    error,
    label,
    width,
    height,
    marginTop,
    marginBottom,
    marginLeft,
    MarginRight,
    ...rest
  } = props;

  return (
    <Grid container>
      <Grid
        item
        sx={{
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          MarginRight: MarginRight,
        }}
      >
        <Box width={{ lg: "590px",sm:'440px' }} height="auto">
          <Typography
            sx={{
                fontSize:'16px',
              color: "#47464F",
              marginBottom: "12px",
              textAlign: "left",
            }}
          >
            {label}
          </Typography>
        </Box>
        <TextField
          sx={{
            width: "90%",
            height: "44px",
            borderRadius: "4px",
            "& input": {
              backgroundColor: 'white',
              boxSizing: "unset !important",
              height: "13px",
              fontSize: "16px",
              fontFamily: 'inter',
              fontWeight: 400,
            },
            "& fieldset": {
              borderColor: 'white',
              borderRadius: "4px",
            },
            "& .MuiInput-root:before": {
              borderBottom: "transparent !important",
            },
            "& .MuiOutlinedInput-root": {
              background: 'white',
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid var(--error-300, #D0D5DD) !important",
            },
            "&.Mui-error": {
              borderRadius: "4px",
              background: "var(--White, #FFF)",
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            },
            "& .custom-textfield": {
              height: "44px",
              borderRadius: "4px",
              backgroundColor: 'white',
              padding: "10px",
              boxSizing: "unset !important",
              fontSize: "16px",
              color: "#333",
            },
           
          }}
          {...rest}
          
        />
      </Grid>
    </Grid>
  );
};

export default Customtextfield;
