import * as React from "react";

import Grid from "@mui/material/Grid";

import Image from "next/image";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
export default function ComplexGrid() {
  return (
    <>
      <Grid container spacing={1} sx={{ marginTop: "2em" }}>
        <Grid
          item
          sx={{
            marginLeft: "20%",
          }}
        >
          <Image src="/image/icon-logo.png" width="45" height="45" alt="logo" />
        </Grid>
        <Grid item xs={2} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid
              item
              xs
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#000",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <h1>
                Find<span>.</span>y
              </h1>
            </Grid>
          </Grid>
          <Grid item xs>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, bgcolor: "#0C8CE9", width: "14em" }}
            >
              Achados&Perdidos
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Paper
        sx={{
          p: 2,
          marginLeft: "25%",
          maxWidth: 600,
          flexGrow: 1,
          marginTop: "2em",
        }}
      >
        <div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "70ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-static"
              multiline="false"
              rows={4}
              placeholder="O que você está procurando?"
            />
          </Box>
        </div>
      </Paper>
      <Grid container spacing={3} sx={{marginTop:"2em"}}>
        <Grid
          item
          sx={{
            marginLeft: "38%",
          }}
        >
          <Image src="/image/EmptyState.png" width="175" height="175" alt="logo" />
        </Grid>
        </Grid>
    </>
  );
}
