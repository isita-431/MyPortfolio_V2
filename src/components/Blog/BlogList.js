import React from "react";
import { Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

function BlogList({ articles, onIncrementView, onLike }) {
  if (!articles || articles.length === 0) {
    return (
      <Typography variant="subtitle1" align="center">
        No articles found for your selected topic(s).
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {articles.map((blog) => (
        <Grid item key={blog._id} xs={12} sm={6} md={4}>
          <BlogCard
            blog={blog}
            onIncrementView={onIncrementView}
            onLike={onLike}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default BlogList;
