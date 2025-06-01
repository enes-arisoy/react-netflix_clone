import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import WatchList from "./pages/watch-list/index";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import { useDispatch } from "react-redux";
import { getWatchList } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchList());
  }, []);
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen p-5 md:p-10 lg:px-15 xl:px-20">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/watch-list" element={<WatchList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
