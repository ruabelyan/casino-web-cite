import React from "react";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { routerMiddleware, connectRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { Wrapper } from "@components";
import { ArrowDownIcon } from "@icons";
import { Row, Column } from "@react-tiny-grid/core";

import "./sass/main.scss";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

const reducers = (history) =>
	combineReducers({
		router: connectRouter(history),
	});

const store = createStore(
	reducers(history),
	composeWithDevTools(applyMiddleware(...middlewares))
);

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Wrapper></Wrapper>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
