import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Card, Image, Alert } from 'react-bootstrap';
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
  const [postType, setPostType] = useState('headline'); // New state for post type
  const [alertMessage, setAlertMessage] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    formData.append('postType', postType); // Include post type in request
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
        setPostType('headline'); // Reset post type
        setImage(null);
        setImagePreview(null);

        if (isSmallScreen) {
          toast.success('🎉 Post successfully created!', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
        } else {
          setAlertMessage({ type: 'success', text: '🎉 Post successfully created!' });
        }
      }
    } catch (error) {
      console.error('Error creating post:', error.response || error);

      if (isSmallScreen) {
        toast.error('❌ Failed to create post. Try again.', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      } else {
        setAlertMessage({ type: 'danger', text: '❌ Failed to create post. Try again.' });
      }
    }
  };

  return (
    <Container className="mt-4 new-post-container">
      <h2 className="title">Create a New Post</h2>
      <div className="underline"></div>

      {!isSmallScreen && alertMessage && (
        <Alert variant={alertMessage.type} onClose={() => setAlertMessage(null)} dismissible>
          {alertMessage.text}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="form-animate">
        <Form.Group className="mb-3">
          <Form.Label>Post Type</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Headline"
              name="postType"
              value="headline"
              checked={postType === 'headline'}
              onChange={(e) => setPostType(e.target.value)}
              inline
            />
            <Form.Check
              type="radio"
              label="Article"
              name="postType"
              value="article"
              checked={postType === 'article'}
              onChange={(e) => setPostType(e.target.value)}
              inline
            />
          </div>
        </Form.Group>

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

      <ToastContainer />
    </Container>
  );
};

export default NewPost;
