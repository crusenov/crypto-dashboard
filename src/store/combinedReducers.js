import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

import { cryptoData } from "../containers/crypto/store/cryptoReducers";
import { watchListData } from "../containers/watchlist/store/watchListReducers";

const persistConfig = {
  key: "user",
  whitelist: [cryptoData],
  storage,
};

const rootReducer = combineReducers({ cryptoData, watchListData });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { store, persistor };
