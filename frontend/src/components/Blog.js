import { Card } from "react-bootstrap";

const Blog = ({ title, body, author }) => {
  return (
    <Card id="blog">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <hr />
        <Card.Text>Posted by {author}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Blog;
