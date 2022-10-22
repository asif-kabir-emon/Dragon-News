import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import News from "../pages/News/News";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsAndCondition from "../pages/Others/TermsAndCondition/TermsAndCondition";
import Profile from "../pages/Others/Profile/Profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://dragon-news-server-six-ashen.vercel.app/news"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () =>
          fetch("https://dragon-news-server-six-ashen.vercel.app/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-six-ashen.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-six-ashen.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
