import * as constants from "./watchListConstants";

const initialState = {
  data: [],
  isLoading: false,
};

export const watchListData = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.WATCHLIST_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };

    default:
      return state;
  }
};
