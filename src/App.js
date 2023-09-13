import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Coin from "./pages/Coin";
import ComparePage from "./pages/ComparePage";
import WatchList from "./pages/WatchList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* Dynamic Router  */}
        <Route path="/coin/:id" element={<Coin />}></Route>
        <Route path="/compare" element={<ComparePage />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
