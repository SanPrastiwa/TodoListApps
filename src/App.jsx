import { React, useState } from "react";
// import "./App.css";
import { connect } from "react-redux";
import * as actionTypes from "./actions/todos.js";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function App({
  title,
  addTodo,
  editTodo,
  edit,
  setCompleted,
  todoList,
  setTitle,
  setTodo,
  setEdit,
  deleteTodo,
}) {
  const [filterComplete, setFilterComplete] = useState(null);
  const todoListFilter = todoList.filter((item) => {
    if (filterComplete === null) {
      return item;
    } else if (item.completed === filterComplete) {
      {
        return item;
      }
    }
  });

  const [Alignment, setAlignment] = useState();
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleEdit = (item) => {
    setTitle(item.value);
    setEdit();
    setTodo(item);
  };

  const handleDelete = (item) => {
    setTodo(item);
    deleteTodo();
  };
  const handleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleClick = () => {
    if (title.length === 0) {
      return;
    }
    if (edit) {
      editTodo();
    } else {
      addTodo();
    }
  };
  const handleComplete = (item) => {
    setTodo(item);
    setCompleted();
  };

  return (
    <div align="center">
      <h1 align="center">What's the plan for today?</h1>
      <TextField
        sx={{ width: "30%", m: 5 }}
        id="outlined-basic"
        variant="outlined"
        label="Masukan Todo"
        value={title}
        onChange={handleChange}
      />
      <Button
        sx={{ m: 5, p: 2, width: `7%`, ml: -1 }}
        onClick={handleClick}
        variant="contained"
      >
        {edit ? "Edit" : "Add"}
      </Button>{" "}
      <br />
      <ToggleButtonGroup
        color="primary"
        value={Alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="Platform"
      >
        <ToggleButton
          onClick={() => setFilterComplete(null)}
          variant="contained"
          color="success"
          size="small"
          value="All"
        >
          All
        </ToggleButton>
        <ToggleButton
          onClick={() => setFilterComplete(false)}
          variant="contained"
          color="success"
          size="small"
          onChange={handleAlignment}
          value="Active"
        >
          Active
        </ToggleButton>
        <ToggleButton
          onClick={() => setFilterComplete(true)}
          // sx={{ mx: -1, borderRadius: "15px" }}
          variant="contained"
          color="success"
          size="small"
          value="Completed"
        >
          Completed
        </ToggleButton>
      </ToggleButtonGroup>
      <List
        sx={{
          maxWidth: 510,
          ml: -5,
        }}
      >
        {todoListFilter &&
          todoListFilter.map((item) => {
            return (
              <ListItem
                sx={{ border: 1, borderColor: "grey.500", m: 2 }}
                key={item.id}
              >
                <ListItemIcon>
                  <IconButton onClick={() => handleComplete(item)}>
                    {!item.completed && (
                      <CheckBoxOutlineBlankIcon color="default" />
                    )}
                    {item.completed && <CheckBoxIcon color="success" />}
                  </IconButton>
                </ListItemIcon>

                <ListItemText
                  primary={item.value}
                  style={
                    item.completed === true
                      ? {
                          textDecoration: "line-through",
                          display: "inline",
                        }
                      : { textDecoration: "none" }
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    sx={{ color: "purple" }}
                    aria-label="edit"
                    onClick={() => handleEdit(item)}
                  >
                    <ModeEditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    sx={{ color: "red" }}
                    aria-label="delete"
                    onClick={() => handleDelete(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    edit: state.edit,
    title: state.title,
    todoList: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: () => dispatch(actionTypes.addTodo()),
    deleteTodo: (item) => dispatch(actionTypes.deleteTodo(item)),
    editTodo: () => dispatch(actionTypes.editTodo()),
    setEdit: () => dispatch(actionTypes.setEdit()),
    setCompleted: () => dispatch(actionTypes.setCompleted()),
    setTodo: (item) => dispatch(actionTypes.setTodo(item)),
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
