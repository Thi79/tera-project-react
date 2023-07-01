import { Routes, Route, BrowserRouter} from "react-router-dom";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import UserPostForm from "./components/pages/UserPostForm";
import { useState } from "react";

import { CurrentUserContext } from "./contexts/CurrentUserContext";

import "./styles/normalize.css"
import "./styles/fontawesome.min.css"
import "./styles/main.css"


function App() {
  const [currentUser, setCurrenteUser] = useState("");

  return (
  <CurrentUserContext.Provider value={{currentUser, setCurrenteUser}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/users/:userId" element={<UserBlog/>}></Route>
        <Route path="/users/:userId/post" element={<UserPostForm/>}></Route>
      </Routes>
    </BrowserRouter>
  </CurrentUserContext.Provider>
  );
}

export default App;
