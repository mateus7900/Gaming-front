import { Route, Routes, useNavigate } from "react-router-dom"
import HomePage from "./pages/home/page"
import ExplorePage from "./pages/explore/page"
import UserPage from "./pages/user/page"
import LoginPage from "./pages/login/page"
import RegisterPage from "./pages/register/page"
import useUser from "./context/UserContext"
import { useEffect } from "react"

function App() {


  const { logged } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!logged){
      navigate("/login")
      return;
    }

    if (logged && window.location.pathname === "/"){
      navigate("/home")
    }
  }, [logged, navigate])

  return (
    <div>
      <Routes>
        <Route Component={HomePage} path="/home" />
        <Route Component={ExplorePage} path="/explore" />
        <Route Component={UserPage} path="/user" />
        <Route Component={LoginPage} path="/login" />
        <Route Component={RegisterPage} path="/register" />
      </Routes>
    </div>
  )
}

export default App
