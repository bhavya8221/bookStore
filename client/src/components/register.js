import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Register = () => {
  const [uname, setUname] = React.useState("");
  const [umob, setUmob] = React.useState("");
  const [uaddress, setAddress] = React.useState("");
  const onSubmitForm = async () => {
    // e.preventDefault();
    let databody = {
      userName: uname,
      userContact: umob,
      userAddress: uaddress,
    };
    let result = await fetch("http://localhost:2022/user", {
      method: "post",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await result.json();
    console.log(data);
    setUname("");

    setUmob("");
    setAddress("");
  };

  return (
    <>
      <Form className="reg">
        <h2>Register</h2>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="user name"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="number" placeholder="contact number"
           value={umob}
           onChange={(e) => setUmob(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3}
           value={uaddress}
           onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            onSubmitForm();
          }}
        >
          register
        </Button>{" "}
      </Form>
    </>
  );
};

export default Register;
