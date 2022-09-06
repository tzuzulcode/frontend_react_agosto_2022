import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginState from "./pages/LoginState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login_state" element={<LoginState />} />
      </Routes>
      {/* Reto: Investigar acerca del Context de React */}
    </BrowserRouter>
  );
}

export default App;
