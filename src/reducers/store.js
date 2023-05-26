import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  title: "",
  item: "",
  edit: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newitem = {
        id: Date.now(),
        value: state.title,
        completed: false,
      };
      return {
        ...state,
        items: state.items.concat(newitem),
        title: "",
      };

    case actionTypes.EDIT_TODO:
      var newList = [...state.items];
      var index = newList.indexOf(state.item);
      if (index !== -1) {
        newList[index].value = state.title;
        return {
          ...state,
          title: "",
          edit: false,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.DELETE_TODO:
      newList = [...state.items];
      index = newList.indexOf(state.item);
      if (index !== -1) {
        newList.splice(index, 1);
        return {
          ...state,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case actionTypes.SET_TODO:
      return {
        ...state,
        item: action.item,
      };
    case actionTypes.SET_COMPLETED:
      newList = [...state.items];
      index = newList.indexOf(state.item);
      if (index !== -1) {
        newList[index].completed = !state.item.completed;
        return {
          ...state,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.SET_EDIT:
      return {
        ...state,
        edit: true,
      };

    default:
      return state;
  }
};

export default items;
