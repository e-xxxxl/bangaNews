import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import './NewPost.css'; // Import CSS for animations & styling

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Tech');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:5000/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        setMessage({ type: 'success', text: 'Post created successfully!' });
        setTitle('');
        setContent('');
        setCategory('Tech');
        setImage(null);
      }
    } catch (error) {
      setMessage({ type: 'danger', text: 'Failed to create post. Try again.' });
    }
  };

  return (
    <Container className="mt-4 new-post-container">
      <h2 className="title">Create a New Post</h2>
      <div className="underline"></div>

      {message && <Alert variant={message.type}>{message.text}</Alert>}

      <Form onSubmit={handleSubmit} className="form-animate">
        <Form.Group className="mb-3" controlId="postTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="postContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="postCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Tech">Tech</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="Entertainment">Entertainment</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="postImage">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit Post
        </Button>
      </Form>
    </Container>
  );
};

export default NewPost;
