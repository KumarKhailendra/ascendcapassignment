import React, { useState } from "react";
import {
  CustomButton,
  CustomForm,
  CustomTextField,
  LoginContainer,
  CustomLink,
} from "./style";
import { Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

function Login({setUser}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setSPassword] = useState("");

  const handleLogin = async() => {
    const user = await axios.post(`/api/user/login`, {email, password});
    const auth = user?.data?.data
    window.sessionStorage.setItem("user", JSON.stringify(auth));
    setUser(auth)
    console.log(auth);
  }

  return (
    <LoginContainer>
      <CustomForm>
        <h1 className="">Login Form</h1>
        <CustomTextField fullWidth label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" />
        <CustomTextField
          fullWidth
          type={showPassword ? "text" : "password"}
          label="Password"
          value={password} 
          onChange={(e)=>setSPassword(e.target.value)}
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
          onClick={handleLogin}
        >
          Log in
        </CustomButton>
        <Box>
        if you don't have Account? 
        <CustomLink to="/register">
          Create Account
        </CustomLink>
        </Box>
      </CustomForm>
    </LoginContainer>
  );
}

export default Login;
