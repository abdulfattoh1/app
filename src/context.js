import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    loading: false,
    data: [],
    price: 0,
    amount: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch("data.json"),
      resData = await res.json();
    dispatch({ type: "DISPLAY_DATA", payload: resData });
  };
  useEffect(() => {
    getData();
  }, []);

  const LikeFunc = (id) => {
    dispatch({ type: "LIKE", payload: id });
  };
  const BuyFunc = (id) => {
    dispatch({ type: "BUY", payload: id });
  };
  const IncreaseAmount = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        LikeFunc,
        BuyFunc,
        IncreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
