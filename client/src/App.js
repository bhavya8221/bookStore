import logo from "./logo.svg";
import "./App.css";

import Home from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import BookList from "./components/bookList";
import Register from "./components/register";
import AddBook from "./components/addBook";
import OrderBook from "./components/orderBook";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<BookList />}></Route>
          <Route exact path="/reg" element={<Register />}></Route>
          <Route exact path="/addbook" element={<AddBook />}></Route>
          {/* <Route exact path="/orderBook" element={<OrderBook />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
