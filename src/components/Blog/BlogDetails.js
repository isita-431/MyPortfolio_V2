import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Button } from "@mui/material";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://myportfolio-v2-z0kp.onrender.com/api/blogs/${id}`
        );
        const data = await res.json();
        if (res.ok) {
          setBlog(data);
        } else {
          console.error("Failed to fetch blog:", data.error);
        }
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Increment the like count
  const handleLike = async () => {
    try {
      const res = await fetch(
        `https://myportfolio-v2-z0kp.onrender.com/api/blogs/${id}/like`,
        {
          method: "PATCH",
        }
      );
      const result = await res.json();
      if (res.ok) {
        // Update local state
        setBlog((prev) => ({ ...prev, likeCount: result.blog.likeCount }));
      } else {
        console.error("Failed to increment like:", result.error);
      }
    } catch (err) {
      console.error("Error incrementing like:", err);
    }
  };

  if (loading) {
    return <Typography>Loading blog...</Typography>;
  }

  if (!blog) {
    return <Typography>Blog not found.</Typography>;
  }

  const {
    title,
    content,
    author,
    tags,
    image,
    createdAt,
    viewCount,
    likeCount,
  } = blog;

  return (
    <div>
      {image && (
        <img
          src={image}
          alt={title}
          style={{ maxWidth: "100%", marginBottom: "1rem" }}
        />
      )}
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        By {author} • {new Date(createdAt).toLocaleDateString()}
      </Typography>
      <Typography variant="body2">
        Views: {viewCount} | Likes: {likeCount}
      </Typography>

      <Button variant="outlined" onClick={handleLike} sx={{ mt: 1 }}>
        ❤️ Like
      </Button>

      <Typography variant="body1" sx={{ mt: 2 }}>
        {content}
      </Typography>

      {tags?.length > 0 && (
        <Typography variant="caption" display="block" sx={{ mt: 2 }}>
          Tags: {tags.join(", ")}
        </Typography>
      )}
    </div>
  );
}

export default BlogDetails;
