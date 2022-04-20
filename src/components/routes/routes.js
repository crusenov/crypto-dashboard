// import NotFound from "../not_found/NotFound";
// import UnderConstruction from "../under_construction/UnderConstruction";
import Home from "../../containers/home/Home";
import Crypto from "../../containers/crypto/Crypto";
import WatchList from "../../containers/watchlist/WatchList";

export const routesConfig = [
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Crypto",
    path: "/crypto",
    component: Crypto,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    component: WatchList,
  },
];
