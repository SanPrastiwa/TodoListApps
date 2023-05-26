import * as actionTypes from "./actionTypes";

export const addTodo = () => {
  return {
    type: actionTypes.ADD_TODO,
  };
};

export const deleteTodo = (item) => {
  return {
    type: actionTypes.DELETE_TODO,
    item: item,
  };
};

export const editTodo = (item) => {
  return {
    type: actionTypes.EDIT_TODO,
    item: item,
  };
};
export const setTitle = (title) => {
  return {
    type: actionTypes.SET_TITLE,
    title: title,
  };
};
export const setCompleted = () => {
  return {
    type: actionTypes.SET_COMPLETED,
  };
};
export const setTodo = (item) => {
  return {
    type: actionTypes.SET_TODO,
    item: item,
  };
};
export const setEdit = () => {
  return {
    type: actionTypes.SET_EDIT,
  };
};
