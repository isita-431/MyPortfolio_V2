import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function BlogCard({ blog, onIncrementView, onLike }) {
  const {
    _id,
    title,
    image,
    createdAt,
    readTime,
    content,
    summary,
    notionLink,
    viewCount,
    likeCount,
  } = blog;

  const formattedDate = new Date(createdAt).toLocaleDateString();

  const shortDescription = summary
    ? summary
    : content
    ? content.slice(0, 80) + "..."
    : "";

  return (
    <Card>
      {/* Image */}
      {image && (
        <CardMedia component="img" height="180" image={image} alt={title} />
      )}

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        {/* Date, read time */}
        <Typography variant="body2" color="text.secondary">
          {formattedDate} • {readTime || 1} min read
        </Typography>

        {/* short text */}
        <Typography variant="body1" sx={{ mt: 1 }}>
          {shortDescription}
        </Typography>

        {/* show views/likes */}
        <Typography variant="body2" sx={{ mt: 1 }}>
          Views: {viewCount} | Likes: {likeCount}
        </Typography>
      </CardContent>

      {/* Card actions: Read More + Like Button */}
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          variant="contained"
          onClick={() => onIncrementView(_id, notionLink)}
        >
          Read More
        </Button>

        <IconButton color="error" onClick={() => onLike(_id)} aria-label="like">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BlogCard;
