import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Navbar from "./Navbar";

const Dashboard = ({ username }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar username={username} />
      <Container>
        <Box></Box>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
