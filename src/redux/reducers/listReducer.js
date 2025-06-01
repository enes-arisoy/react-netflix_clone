import ActionTypes from "./actionType";
// state in ilk değeri
const initialState = {
  list: [],
  isLoading: true,
  error: null,
};

// gelen aksiyona göre state i güncelleyen fonksiyon
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LIST_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.LIST_SUCCESS:
      return { ...state, isLoading: false, error: null, list: action.payload };
    case ActionTypes.ADD_TO_LIST:
      const updated = state.list.concat(action.payload);
      return {...state,list: updated};
    case ActionTypes.REMOVE_FROM_LIST:
      // gelen id ye göre listeden silme işlemi
      const filtered = state.list.filter(
        (item) => item.id !== action.payload
      );
      return {...state, list: filtered};
  }

  return state;
};
export default listReducer;
