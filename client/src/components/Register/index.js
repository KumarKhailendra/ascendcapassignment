import React, { useState } from "react";
import {
  CustomButton,
  CustomForm,
  CustomTextField,
  LoginContainer,
} from "./style";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

function Register({setUser}) {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUser = async () => {
    const user = await axios.post(`/api/user/register`, {
      firstName, 
      lastName, 
      email, 
      password
    });
    const auth = user?.data?.data;
    window.sessionStorage.setItem("user", JSON.stringify(auth));
    setUser(auth)
    console.log(auth);
    navigate("/");
  }

  return (
    <LoginContainer>
      <CustomForm>
        <h1 className="">Registration Form</h1>
        <CustomTextField fullWidth label="FirstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} variant="outlined" />
        <CustomTextField fullWidth label="LastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} variant="outlined" />
        <CustomTextField fullWidth label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" />
        <CustomTextField
          fullWidth
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Box>
            ),
          }}
        />

        <CustomButton
          type="button"
          fullWidth
          color="primary"
          variant="contained"
          onClick={handleUser}
        >
          Submit
        </CustomButton>
      </CustomForm>
    </LoginContainer>
  );
}

export default Register;
