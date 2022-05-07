import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setmessage } from "../app/messageSlice";
import { settitle } from "../app/titleSlice";
import { setbody } from "../app/bodySlice";

const Addblog = () => {
  const name = useSelector((state) => state.name.value);
  const title = useSelector((state) => state.title.value);
  const body = useSelector((state) => state.body.value);
  const message = useSelector((state) => state.message.value);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, author: name }),
      });
      const data = await response.text();
      dispatch(setmessage(data));
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  const okHandler = () => {
    if (message === "Blog posted successfully") {
      navigate("/blogs");
      setShow(false);
    } else if (message === "Body has to be more than 10 characters long")
      setShow(false);
  };

  return (
    <Container id="addblog">
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Add a new blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={okHandler}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            onChange={(e) => dispatch(settitle(e.target.value))}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="text"
            id="body"
            name="body"
            as="textarea"
            rows={3}
            placeholder="Enter content"
            onChange={(e) => dispatch(setbody(e.target.value))}
            required
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Addblog;
