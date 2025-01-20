import express from "express";
import {
  getAllBlogs,
  getSingleBlogAndIncrementViews,
  createBlog,
  updateBlog,
  deleteBlog,
  incrementLikeCount,
} from "../controllers/blogController.js";
import { handleContactForm } from "../controllers/blogController.js";
// @ts-ignore

const router = express.Router();

// Blog routes
router.get("/", getAllBlogs);
router.get("/:id", getSingleBlogAndIncrementViews);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);
router.patch("/:id/like", incrementLikeCount);
router.post("/contact", handleContactForm);

export default router;
