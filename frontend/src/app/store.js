import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./showSlice";
import loginReducer from "./logSlice";
import blogReducer from "./blogSlice";
import messageReducer from "./messageSlice";
import nameReducer from "./nameSlice";
import emailReducer from "./emailSlice";
import passwordReducer from "./passwordSlice";
import titleReducer from "./titleSlice";
import bodyReducer from "./bodySlice";

const store = configureStore({
  reducer: {
    showStatus: showReducer,
    loginStatus: loginReducer,
    blog: blogReducer,
    message: messageReducer,
    name: nameReducer,
    email: emailReducer,
    password: passwordReducer,
    title: titleReducer,
    body: bodyReducer,
  },
});

export default store;
