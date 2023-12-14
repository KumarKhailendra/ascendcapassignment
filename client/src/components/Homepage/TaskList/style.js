import { ListItem, ListItemIcon, styled } from "@mui/material";

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.04)",
  marginBottom: "10px",

  "&:last-child": {
    marginBottom: "0px",
  },
}));
export const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "35px",
}));
