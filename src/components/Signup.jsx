import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Signup = ({ username, setUsername }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Dashboard");
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Box
        component="form"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "10px",
          outlineStyle: "solid",
          outlineColor: "black",
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>Sign Up</h1>
        <TextField
          id="outlined-basic"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          sx={{ margin: "10px" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ margin: "10px", fontColor: "black" }}
          type="password"
          required
        />
        <Button variant="contained" sx={{ width: "220px" }} type="submit">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
