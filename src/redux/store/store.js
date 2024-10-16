import { applyMiddleware, createStore } from "redux";
import rootReducer from "../rootReducer/rootReducer";
import { myLogger } from "../middlewares/myLogger";
import logger from "redux-logger";

const store = createStore(rootReducer,applyMiddleware(logger,myLogger));

export default store;