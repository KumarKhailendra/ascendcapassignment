import { Box, Button, List, ListItem, styled } from "@mui/material";

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  display: "list-item",
}));
export const CustomList = styled(List)(({ theme }) => ({
  listStyle: "decimal",

  marginLeft: "20px",
}));

export const AddBtnBox = styled(Box)(({ theme }) => ({
  marginTop: "10px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: "100%",
  marginTop: "20px",
}));
