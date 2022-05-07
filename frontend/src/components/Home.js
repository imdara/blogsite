import { Container, Form, Button, Tab, Tabs, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "../app/showSlice";
import { login, logout } from "../app/logSlice";
import { setname } from "../app/nameSlice";
import { setemail } from "../app/emailSlice";
import { setpassword } from "../app/passwordSlice";
import { setmessage } from "../app/messageSlice";

const Home = () => {
  const name = useSelector((state) => state.name.value);
  const email = useSelector((state) => state.email.value);
  const password = useSelector((state) => state.password.value);
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const message = useSelector((state) => state.message.value);
  const showStatus = useSelector((state) => state.showStatus.value);
  const dispatch = useDispatch();

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.text();
      dispatch(setmessage(data));
      if (data === "User signed up successfully") {
        dispatch(show());
        dispatch(login());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.text();
      dispatch(setmessage(data));
      if (data === "User logged in successfully") {
        dispatch(login());
        dispatch(show());
      } else dispatch(show());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container id="home">
      <h2>Welcome to my site</h2>
      <Modal show={showStatus} onHide={() => dispatch(hide())}>
        <Modal.Header>
          <Modal.Title>User Sign up/ login</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => dispatch(hide())}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      {loginStatus ? (
        <>
          <h2>Woohoo! You're logged in</h2>
          <Button variant="danger" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </>
      ) : (
        <Tabs
          defaultActiveKey="login"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="login" title="Login">
            <Form id="loginForm" onSubmit={loginHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={(e) => dispatch(setemail(e.target.value))}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={(e) => dispatch(setpassword(e.target.value))}
                  required
                />
              </Form.Group>
              <Button variant="danger" type="submit">
                Login
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="signup" title="Sign up">
            <Form id="signupForm" onSubmit={signUpHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="emailSignUp"
                  name="emailSignUp"
                  placeholder="Enter email"
                  onChange={(e) => dispatch(setemail(e.target.value))}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  onChange={(e) => dispatch(setname(e.target.value))}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="passwordSignUp"
                  name="passwordSignUp"
                  placeholder="Enter password"
                  onChange={(e) => dispatch(setpassword(e.target.value))}
                  required
                />
              </Form.Group>
              <Button variant="danger" type="submit">
                Sign up
              </Button>
            </Form>
          </Tab>
        </Tabs>
      )}
    </Container>
  );
};

export default Home;
