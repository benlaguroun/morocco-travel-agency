import React, { useState } from "react";
import "./Gallery.css";

const images = [
  {
    id: 1,
    src: "../images/gallery-1.jpg",
    alt: "Client Image 1",
    likes: 0,
    comments: [],
  },
  {
    id: 2,
    src: "../images/gallery-2.jpg",
    alt: "Client Image 2",
    likes: 0,
    comments: [],
  },
  {
    id: 3,
    src: "../images/gallery-3.jpg",
    alt: "Client Image 3",
    likes: 0,
    comments: [],
  },
  {
    id: 4,
    src: "../images/gallery-4.jpg",
    alt: "Client Image 4",
    likes: 0,
    comments: [],
  },
  {
    id: 5,
    src: "../images/gallery-5.jpg",
    alt: "Client Image 5",
    likes: 0,
    comments: [],
  },
  {
    id: 6,
    src: "../images/gallery-3.jpg",
    alt: "Client Image 5",
    likes: 0,
    comments: [],
  },
  // Add more images as needed
];

const Gallery = () => {
  const [imageData, setImageData] = useState(images);
  const [showMore, setShowMore] = useState(false);

  // Toggle between showing 3 and all images
  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Function to handle liking an image
  const handleLike = (id) => {
    const updatedImages = imageData.map((img) =>
      img.id === id ? { ...img, likes: img.likes + 1 } : img
    );
    setImageData(updatedImages);
  };

  // Function to handle adding a comment
  const handleAddComment = (id, comment) => {
    const updatedImages = imageData.map((img) =>
      img.id === id ? { ...img, comments: [...img.comments, comment] } : img
    );
    setImageData(updatedImages);
  };

  // Only display 3 images initially, or all images if "Show More" is clicked
  const displayedImages = showMore ? imageData : imageData.slice(0, 4);

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        {displayedImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <div className="image-info">
              <button onClick={() => handleLike(image.id)}>
                👍 {image.likes} Likes
              </button>
              <div className="comments-section">
                <h4>Comments:</h4>
                <ul>
                  {image.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
                <AddComment
                  onAddComment={(comment) =>
                    handleAddComment(image.id, comment)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Show Less Button */}
      <div className="show-more-container">
        <button onClick={handleToggleShowMore} className="show-more-button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

// Component for adding comments
const AddComment = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default Gallery;
