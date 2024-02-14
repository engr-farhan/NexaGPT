import "./normal.css";
import "./App.css";
import Home from "./Page/Home";
import Login from "./Page/Login";
import LoginForm from "./Component/login/LoginForm";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App1() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="auth/login" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route
          index
          exact
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route exact path="auth/login" element={<Login />} />
        <Route exact path="login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App1;
