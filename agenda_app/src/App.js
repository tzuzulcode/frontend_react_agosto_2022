import {BrowserRouter,Routes,Route} from "react-router-dom"
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginCustomHook from "./pages/LoginCustomHook";
import LoginState from "./pages/LoginState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login_state" element={<LoginState />} />
        <Route path="/login_custom_hook" element={<LoginCustomHook />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      {/* Reto: Investigar acerca del Context de React */}
    </BrowserRouter>
  );
}

export default App;
