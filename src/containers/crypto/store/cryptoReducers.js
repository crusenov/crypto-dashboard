import * as constants from "./cryptoConstants";

const initialState = {
  data: [],
  selectedData: [],
  isLoading: false,
};

export const cryptoData = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.CRYPTO_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case constants.CRYPTO_SELECTED_DATA_SUCCESS:
      return { ...state, selectedData: action.payload, isLoading: false };

    default:
      return state;
  }
};
