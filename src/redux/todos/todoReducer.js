
import {
  LOADED,
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";

const todoReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
          ...state,
          action.payload
      ];

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case COLORSELECTED: {
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    }

    default:
      return state;
  }
};

export default todoReducer;
