// import logo from './assets/logo.svg';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/introduction" element={<Introduction/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
