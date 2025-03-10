import React, { useState } from 'react';
import { Form, Button, Container, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NewPost.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Tech');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

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
      const response = await axios.post('http://localhost:3003/news/post', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        setTitle('');
        setContent('');
        setCategory('Tech');
        setImage(null);
        setImagePreview(null);

        // Show toast notification ONLY on small screens
        if (window.innerWidth < 768) {
          toast.success('🎉 Post successfully created!', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
        }
      }
    } catch (error) {
      console.error('Error creating post:', error.response || error);

      if (window.innerWidth < 768) {
        toast.error('❌ Failed to create post. Try again.', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }
    }
  };

  return (
    <Container className="mt-4 new-post-container">
      <h2 className="title">Create a New Post</h2>
      <div className="underline"></div>

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
          <Form.Control type="file" onChange={handleImageChange} />

          {imagePreview && (
            <Card className="image-preview-card mt-3">
              <Card.Body className="text-center">
                <Image src={imagePreview} alt="Preview" fluid className="preview-image" />
                <Button variant="danger" className="mt-2 remove-btn" onClick={removeImage}>
                  Remove Image
                </Button>
              </Card.Body>
            </Card>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit Post
        </Button>
      </Form>

      {/* Toast Notification Container */}
      <ToastContainer />
    </Container>
  );
};

export default NewPost;
