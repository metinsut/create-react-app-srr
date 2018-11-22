import App from '../App';
import HomePage from "../pages/HomePage";
import UsersListPage from "../pages/UserListPage";
import NotFoundPage from "../pages/NotFoundPage";
import PostList from "../pages/PostList";

export default [
   {
      ...App,
      routes: [
         {
            ...HomePage,
            path: "/",
            exact: true
         },
         {
            ...UsersListPage,
            path: "/users",
            routes: [
               {
                  path: "/users/:id",
                  ...PostList
               }
            ]
         },
         {
            ...NotFoundPage
         }
      ]
   }
]


