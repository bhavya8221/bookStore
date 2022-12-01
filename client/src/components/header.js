import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Nav
      activeKey="/bookList"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
       <Nav.Item>
        <Nav.Link>
          <Link to="/addbook">Add Book</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/">BookList</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/orderBook">OrderBook</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/reg">Register</Link>
        </Nav.Link>
      </Nav.Item>
    
     
    </Nav>
  );
};

export default Header;
