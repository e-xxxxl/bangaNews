import React from 'react';
import { FaNewspaper, FaUsers, FaImages, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdDash = () => {
  return (
    <div className="container py-4">
      {/* Hero Section */}
      <section className="bg-primary text-white text-center p-4 rounded">
        <h1 className="display-5 fw-bold">Welcome to the Admin Dashboard</h1>
        <p className="mt-2">Manage articles, media, and users efficiently.</p>
      </section>

      {/* Post Creation Section */}
      <div className="mt-4 text-center">
        <button className="btn btn-success d-flex align-items-center gap-2 mx-auto text-decoration-none">
          <FaPlusCircle /> <Link to="/admin/create-post">Create New Post</Link>
        </button>
      </div>

      {/* Content Area */}
      <main className="row mt-4 g-4">
        <div className="col-md-4">
          <div className="card p-3 d-flex flex-row align-items-center gap-3 shadow-sm">
            <FaNewspaper className="text-primary fs-1" />
            <div>
              <h3 className="fs-5 fw-semibold">Articles</h3>
              <p className="mb-0">Manage your news articles.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 d-flex flex-row align-items-center gap-3 shadow-sm">
            <FaImages className="text-success fs-1" />
            <div>
              <h3 className="fs-5 fw-semibold">Media Library</h3>
              <p className="mb-0">Upload and manage images.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 d-flex flex-row align-items-center gap-3 shadow-sm">
            <FaUsers className="text-danger fs-1" />
            <div>
              <h3 className="fs-5 fw-semibold">Users</h3>
              <p className="mb-0">Manage site users and roles.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdDash;
