import * as constants from "./watchListConstants";

export const getWatchListData = () => (dispatch, getState) => {
  const { selectedData } = getState().cryptoData;
  const { data } = getState().cryptoData;

  // need to make new request comparing unique id 
  dispatch({
    type: constants.WATCHLIST_DATA_SUCCESS,
    payload: data.filter((element) => selectedData.includes(element.id)),
  });
};
