import { Box, Button, TextField, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)(({ theme }) => ({
  color: "inherit",
}));

export const LoginContainer = styled(Box)(({ theme }) => ({
  background: "#eeeeee",
  width: "100%",
  height: "100vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
 
  flexDirection: "column",
}));

export const CustomForm = styled("form")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #e0e0e0", 
  
  padding: "12px",
  flexDirection: "column",

  width: "400px",
}));
export const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "10px",
}));
export const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: "15px",
}));
