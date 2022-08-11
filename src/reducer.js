const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_DATA") {
    return { ...state, data: action.payload, loading: false };
  }
  if (action.type === "LIKE") {
    let likes = state.data.map((item) => {
      if (item.id === action.payload) {
        return { ...item, like: !item.like };
      }
      return item;
    });

    return {
      ...state,
      data: likes,
    };
  }

  if (action.type === "BUY") {
    let buy = state.data.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          buy: !item.buy,
        };
      }
      return item;
    });

    
    return {
      ...state,
      data: buy,
    };
  }


  return {
    ...state,
  };
};

export default reducer;
