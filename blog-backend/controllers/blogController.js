import Blog from "../models/Blog.js";
import nodemailer from "nodemailer";
/**
 * GET /api/blogs
 * Returns all blogs (newest first).
 */
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.status(200).json(blogs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

/**
 * GET /api/blogs/:id
 * Increments viewCount by 1, returns updated blog (including notionLink).
 */
export const getSingleBlogAndIncrementViews = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    // increment view count
    blog.viewCount += 1;
    await blog.save();
    return res.status(200).json(blog);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch blog" });
  }
};

/**
 * POST /api/blogs
 * Creates a new blog.
 */
export const createBlog = async (req, res) => {
  const { title, content, author, tags, image, notionLink } = req.body;
  try {
    const newBlog = new Blog({
      title,
      content,
      author,
      tags,
      image,
      notionLink,
    });
    const savedBlog = await newBlog.save();
    return res.status(201).json(savedBlog);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: "Failed to create blog" });
  }
};

/**
 * PUT /api/blogs/:id
 * Updates a blog by ID.
 */
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, author, tags, image, notionLink } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author, tags, image, notionLink },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.status(200).json(updatedBlog);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: "Failed to update blog" });
  }
};

/**
 * DELETE /api/blogs/:id
 * Removes a blog by ID.
 */
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to delete blog" });
  }
};

/**
 * PATCH /api/blogs/:id/like
 * Increments likeCount by 1, returns the updated blog.
 */
export const incrementLikeCount = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    blog.likeCount += 1;
    await blog.save();
    return res.status(200).json({ message: "Like incremented", blog });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to increment like" });
  }
};

export const handleContactForm = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    console.log("Missing required fields:", {
      firstName,
      lastName,
      email,
      message,
    });
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    console.log("Attempting to send email...");
    console.log(process.env.EMAIL_USER);
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `Message from ${firstName} ${lastName} (${email}):\n\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error during email sending:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
};
