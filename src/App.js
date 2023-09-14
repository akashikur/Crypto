import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Coin from "./pages/Coin";
import ComparePage from "./pages/ComparePage";
import WatchList from "./pages/WatchList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const cursorRef = useRef(null);
  const cursorPointerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorPointer = cursorPointerRef.current;

    document.body.addEventListener("mousemove", function (e) {
      // cursor.style.left = e.preventDefault + "px";
      // cursor.style.top = e.clientY + "px";
      cursorPointer.style.left = e.clientX + "px";
      cursorPointer.style.top = e.clientY + "px";
    });

    document.body.addEventListener("mousedown", function (e) {
      // cursor.style.height = "0.5rem";
      // cursor.style.width = "0.5rem";
      cursorPointer.style.height = "2rem";
      cursorPointer.style.width = "2rem";
      cursorPointer.style.display = "block";
    });

    document.body.addEventListener("mouseup", function (e) {
      // cursor.style.height = "0.3rem";
      // cursor.style.width = "0.3rem";
      cursorPointer.style.height = "0.5rem";
      cursorPointer.style.width = "0.5rem";
      cursorPointer.style.display = "none";
    });
  }, []);
  return (
    <div className="App">
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-pointer" ref={cursorPointerRef} />
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
