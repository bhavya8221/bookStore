import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import MaterialTable from "material-table";
const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const onSubmitBook = async () => {
    // e.preventDefault();
    let databody = {
      bookName: bookName,
    };
    let result = await fetch("http://localhost:2022/addbook", {
      method: "post",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await result.json();
    console.log(data);
    setBookName("");
  };

  return (
    <>
      <div className="addBook">
        <h2>AddBook</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Book name"
                      value={bookName}
                      onChange={(e) => setBookName(e.target.value)}
                    />
                  </Form.Group>
                </Form>
                <Button
                  variant="primary"
                  onClick={() => {
                    onSubmitBook();
                  }}
                >
                  addBook
                </Button>{" "}
              </td>
            </tr>
          </thead>
        </Table>
      </div>
    </>
  );
};

export default AddBook;
