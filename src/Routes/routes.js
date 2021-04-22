import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/const";
import Login from "../components/Login/Login";
import Chat from "../components/Chat/Chat";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
];

export const privatRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  }
];