import FullScreenLoader from "@/components/FullScreenLoader/FullScreenLoader";
import clothing from "@/data/clothing";
import useFirebaseAuth from "@/hooks/useFirebaseAuthState";
import { createContext, useReducer, Dispatch } from "react";
import { User } from "../features/user/types";
import { cloth } from "../types";

type State = {
  currentUser: User | Object;
  isAuthenticated: boolean;
  showDropDown: boolean;
  clothes: Array<cloth>;
};

type Actions =
  | {
      type: "DROPDOWN_TOGGLE";
      payload: boolean;
    }
  | {
      type: "SET_USER";
      payload: User | Object;
    }
  | {
      type: "FILTER_DATA";
      payload: { category: string; color: string | undefined; price: number[] };
    };

type Filter = {
  category: string;
  color: string | undefined;
  price: number[];
};

type ProviderProps = {
  children: React.ReactNode;
};

export const getAllClothings = () => {
  const clothesArray: Array<cloth> = [];
  let items = Object.values(clothing).map((clothingValue) =>
    clothingValue.items.map((item: any) => item)
  );
  return clothesArray.concat.apply([], [...items]);
};

const filterFunction = (value: Filter) => {
  let filteredClothings = getAllClothings();
  if (value.category) {
    if (value.category === "all") {
      filteredClothings = getAllClothings();
    } else {
      filteredClothings = clothing[value.category].items;
    }
  }
  if (value.color && value.color !== undefined) {
    filteredClothings = filteredClothings.filter((clothing) =>
      clothing.name.toLowerCase().includes(value.color as string)
    );
  }
  if (value.price) {
    filteredClothings = filteredClothings.filter((clothing) => {
      if (
        clothing.price >= value.price[0] &&
        clothing.price <= value.price[1]
      ) {
        return clothing;
      }
      return false;
    });
  }

  return filteredClothings;
};

const initialValues = {
  currentUser: {},
  isAuthenticated: false,
  showDropDown: false,
  clothes: getAllClothings(),
  setCurrentUser: (value: object | User) => {},
  setShowDropDown: (value: boolean) => {},
  setFilter: (value: Filter) => {},
};

export type ContextProps = {
  dispatch: Dispatch<{ type: string; payload: any }>;
  state: State;
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "DROPDOWN_TOGGLE":
      return {
        ...state,
        showDropDown: action.payload as boolean,
      };
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: Object.keys(action.payload).length !== 0,
      };
    case "FILTER_DATA":
      const result = filterFunction(action.payload);
      return {
        ...state,
        clothes: result,
      };
    default:
      return state;
  }
};

const Context = createContext(initialValues);

export default function Provider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <Context.Provider
      value={{
        currentUser: state.currentUser,
        isAuthenticated: state.isAuthenticated,
        showDropDown: state.showDropDown,
        clothes: state.clothes,
        setCurrentUser: (value: object | User) =>
          dispatch({ type: "SET_USER", payload: value }),
        setShowDropDown: (value: boolean) =>
          dispatch({ type: "DROPDOWN_TOGGLE", payload: value }),
        setFilter: (value: Filter) =>
          dispatch({ type: "FILTER_DATA", payload: value }),
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Provider, Context };
