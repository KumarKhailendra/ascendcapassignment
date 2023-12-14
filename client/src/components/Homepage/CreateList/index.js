import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Divider,
  List,
  ListItem
} from "@mui/material";
import {
  CustomListItemButton,
  CustomListItemIcon,
} from "./style";
import AddIcon from "@mui/icons-material/Add";
import AddListModal from "../AddListModal";


export default function CreateList({setAllLists, user}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          minWidth: 200,
          // maxWidth: 200,
          margin: "24px",
          // minHeight: 300,
          maxHeight: 140,
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 20, textAlign: "center" }}
            color="text.secondary"
            gutterBottom
          >
            Create New List
          </Typography>
          <Divider />

          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem
                  disablePadding
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CustomListItemButton onClick={handleOpen}>
                    <CustomListItemIcon>
                      <AddIcon sx={{ width: "40px", height: "40px" }} />
                    </CustomListItemIcon>
                  </CustomListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </CardContent>
      </Card>
      {open && (
        <AddListModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          setAllLists={setAllLists}
          user={user}
        />
      )}
    </>
  );
}
