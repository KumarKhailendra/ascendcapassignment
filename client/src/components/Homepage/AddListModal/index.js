import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddBtnBox, CustomList, CustomListItem, SubmitButton } from "./style";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddListModal({ open, handleClose, setAllLists, user }) {
  const [newTaskList, setNewTaskList] = React.useState([]);

  const [newTask, setNewTask] = React.useState("");
  const [newListName, setNewListName] = React.useState("");

  const onChangeTaskHandler = (e) => setNewTask(e.target.value);
  const onChangeListNameHandler = (e) => setNewListName(e.target.value);

  const addTaskHandler = () => {
    if (!newTask) {
      return;
    }
    setNewTaskList((prevList) => [...prevList, { "taskName" : newTask } ]);
    setNewTask("");
  };

  const submitHandler = () => {
    const createList = async() => {
      await axios.post(`/api/list/create`, {listName : newListName,
        author: user?.id,
        tasks: newTaskList});

      const data = await axios.get(`/api/list/All?id=${user?.id}`);
      setAllLists(data.data.lists);
      handleClose();
    }
    createList();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            textAlign="center"
            variant="h6"
            component="h2"
          >
            Create New List
          </Typography>

          <Box marginBottom={2}>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              marginBottom={1}
            >
              Add List Name :
            </Typography>
            <TextField
              fullWidth
              label="New List Name"
              variant="outlined"
              onChange={onChangeListNameHandler}
              value={newListName}
            />
          </Box>

          <Box>
            <Typography id="modal-modal-description" marginBottom={-1}>
              Add Tasks :
            </Typography>
            <Box>
              <CustomList>
                {newTaskList.map((cItem, i) => (
                  <CustomListItem key={i} disablePadding>
                    {cItem.taskName}
                  </CustomListItem>
                ))}
              </CustomList>

              <AddBtnBox>
                <TextField
                  label="Add Task"
                  variant="outlined"
                  value={newTask}
                  onChange={onChangeTaskHandler}
                />
                <Button
                  variant="outlined"
                  sx={{ marginLeft: "10px" }}
                  onClick={addTaskHandler}
                >
                  <AddIcon />
                  Add
                </Button>
              </AddBtnBox>
            </Box>
          </Box>

          <SubmitButton variant="outlined" onClick={submitHandler}>
            Submit
          </SubmitButton>
        </Box>
      </Modal>
    </div>
  );
}
