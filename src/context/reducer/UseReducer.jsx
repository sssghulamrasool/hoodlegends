import { useReducer, createContext } from "react";

const initialState = {
  menuToggle: false,
  vallatPopoup: false,
  teamPop: false,
  utilesPop: false,
};

export const contentCreate = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        menuToggle: !state.menuToggle,
      };
    case "VALLLAT":
      return {
        ...state,
        vallatPopoup: !state.vallatPopoup,
      };

    case "TEAMPOPUP":
      return {
        ...state,
        teamPop: !state.teamPop,
      };

    case "UTLISPOP":
      return {
        ...state,
        utilesPop: !state.utilesPop,
      };

    default:
      return state;
  }
};

export const DataProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <contentCreate.Provider value={{ state, dispatch }}>
      {props.children}
    </contentCreate.Provider>
  );
};
