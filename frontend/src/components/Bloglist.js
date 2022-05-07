import { Container } from "react-bootstrap";
import Blog from "./Blog";
import useFetch from "../components/useFetch";

const Bloglist = () => {
  const { blogs } = useFetch();
  return (
    <Container
      style={{
        padding: "28px",
      }}
    >
      <h2>Blogs</h2>
      <ul id="bloglist">
        {blogs.map((blog, i) => (
          <li>
            <Blog
              title={blog.title}
              body={blog.body}
              author={blog.author}
              key={i + 1}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Bloglist;
