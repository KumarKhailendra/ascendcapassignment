import { ListItem, ListItemButton, ListItemIcon, styled } from "@mui/material";

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.04)",
  marginBottom: "10px",

  "&:last-child": {
    marginBottom: "0px",
  },
}));

export const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "unset",
}));

export const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.04)",

  height: "55px",
  width: "55px",

  borderRadius: "50%",

  display: "flex",
  justifyContent: "center",
  maxWidth: "55px",
}));
