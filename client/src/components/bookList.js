import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
const BookList = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2022/getbook")
      .then((data) => data.json())
      .then((data) => setBookList(data));
  }, []);
  return (
    <div className="bookList">
      <MaterialTable
        title="BookList"
        columns={[{ title: "bookName", field: "bookName" }]}
        data={bookList}
        options={{
          selection: true,
        }}
        actions={[
          {
            tooltip: "Remove All Selected Users",
            icon: "delete",
            onClick: (evt, data) =>
              alert("You want to delete " + data.length + " rows"),
          },
        ]}
      />
    </div>
  );
};

export default BookList;
