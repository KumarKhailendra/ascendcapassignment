import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Checkbox,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { CustomListItem, CustomListItemIcon } from "./style";
import axios from "axios";



export default function TaskList({ cTaskListData, setAllLists, user }) {
  const [relatedTargets, setRelatedTargets] = React.useState(null);
  const onDragStart = (evt) => {
    console.log("element", evt.currentTarget);
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };

  console.log("relatedTargets", relatedTargets);
  const onDragEnd = (evt) => {};

  const onDragEnter = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };
  const onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    setRelatedTargets(currentTarget);
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
  };
  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  const onDrop = async (evt) => {
    evt.preventDefault();
    let id = evt.dataTransfer.getData("text/plain");

    const taskIdWhichNeedToDrop = id;
    const currentListId = evt.currentTarget.id;

    console.log(
      "id...",
      taskIdWhichNeedToDrop,
      currentListId,
    );
    const taskUpdate = await axios.put(`/api/list/update?taskId=${id}&listId=${currentListId}`);

    if(taskUpdate){
      const data = await axios.get(`/api/list/All?id=${user?.id}`);
      setAllLists(data.data.lists)
    }

  };

  const handleChackBox = async (event, id) => {
    if(event.target.checked){
      await axios.delete(`/api/list/delete/task/${id}`);
      const data = await axios.get(`/api/list/All?id=${user?.id}`);
      setAllLists(data.data.lists)
    }
    event.target.value = false
    console.log(event.target.checked, id);
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        margin: "24px",
        maxHeight: 450,
        overflow: "auto",

        /* width */
        "&::-webkit-scrollbar": {
          width: "0px",
        },

        /* Track */
        "&::-webkit-scrollbar-track": {
          background: "#fff",
        },

        /* Handle */
        "&::-webkit-scrollbar-thumb": {
          background: "#f2f2f2",
        },
        /* Handle on hover */
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
      onDragLeave={(e) => onDragLeave(e)}
      onDragEnter={(e) => onDragEnter(e)}
      onDragEnd={(e) => onDragEnd(e)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e)}
      id={cTaskListData.id}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 20, textAlign: "center" }}
          color="text.secondary"
          gutterBottom
        >
          {cTaskListData.listName}
        </Typography>
        <Divider />

        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              {cTaskListData.Tasks.map((cTask, index) => {
                return (
                  <CustomListItem
                    key={index}
                    disablePadding
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                    id={cTask.id}
                  >
                    <ListItemButton>
                      <CustomListItemIcon>
                        <Checkbox  onChange={(e) => handleChackBox(e, cTask.id)} />
                      </CustomListItemIcon>
                      <ListItemText primary={cTask.taskName} />
                    </ListItemButton>
                  </CustomListItem>
                );
              })}
            </List>
          </nav>
        </Box>
      </CardContent>
    </Card>
  );
}
