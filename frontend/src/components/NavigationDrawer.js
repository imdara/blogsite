import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationDrawer = () => {
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "New Blog", path: "/createblog" },
    { title: "Blogs", path: "/blogs" },
  ];
  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand>My site</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {loginStatus &&
              navLinks.map((link) => (
                <Nav.Link>
                  <Link className="nav-link" to={link.path}>
                    {link.title}
                  </Link>
                </Nav.Link>
              ))}
          </Nav>
          {/* <NavDropdown
                style={{ marginTop: 8 }}
                title="User Type"
                id="collasible-nav-dropdown"
              >
                <Nav.Link>
                  <Link className="nav-link" to="/type=student">
                    Student
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/type=teacher">
                    Teacher
                  </Link>
                </Nav.Link>
              </NavDropdown> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationDrawer;
