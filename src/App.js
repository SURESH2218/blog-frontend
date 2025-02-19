import { useContext } from "react";
import Topbar from "./Components/topbar/topbar";
import Write from "./pages/Write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from "./Context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/post" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
