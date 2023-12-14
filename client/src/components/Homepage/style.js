import { Box, styled } from "@mui/material";

export const MainContainer = styled(Box)(({ theme }) => ({
  // padding: "24px 24px 24px 24px",
  padding: "24px",
  background: "#F5F5F5",

  overflow: "auto",
  minWidth: "100%",
  minHeight: "90vh",

  display: "flex",
}));
