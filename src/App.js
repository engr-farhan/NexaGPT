
import { ThemeProvider } from "@mui/material";
// import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
// import Home from "./Page/Home";
import ConfiguredTheme from "./theme";
import ChatGPT from "./Page/ChatGPT";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RPG from "./Page/RPG";
import Home from "./Page/Home/index";
import "./normal.css";
import "./App.css";
// import New from "./Page/New/index";
import SignUpForm from "./Component/login/LoginForm";
import Login from "./Page/Login";
import LoginForm from "./Component/Navbar/CustomerInfo/Login/LoginForm";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";


function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="auth/login" />;
  };

  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Layout>
      <div className="App">

        <Routes>
          <Route path="/" element={<Navigate to="/nexagpt" />}></Route>
          <Route path="/home/*" element={<Home />} />
          <Route path="/nexa/*" element={<RPG />} />
          {/* <Route path="/new/*" element={<New />} /> */}
          <Route path="/nexagpt/*" element={<ChatGPT />} />
          <Route path="/auth/signup" element={<LoginForm />} />

          <Route path="/auth/login" element={<Login />} />

      </Routes>
      </div>
      </Layout>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      </ThemeProvider>

  );
}

export default App;



// function App() {
//   return (
//     <ThemeProvider theme={ConfiguredTheme}>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Navigate to="/nexagpt" />}></Route>
//           <Route path="/home/*" element={<Home />} />
//           <Route path="/nexa/*" element={<RPG />} />
//           <Route path="/nexagpt/*" element={<ChatGPT />} />
//         </Routes>
//       </Layout>
//       <ToastContainer
//         position="bottom-left"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//   );
// }
