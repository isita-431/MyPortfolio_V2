import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import BlogList from "../Blog/BlogList";

function BlogPage() {
  // -------------------------------
  // 1) State for blog articles
  // -------------------------------
  const [articles, setArticles] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  // -------------------------------
  // 2) Fetch All Blogs on Mount
  // -------------------------------
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();

        // sort newest first
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setArticles(sorted);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // -------------------------------
  // 3) Build Topics List
  // -------------------------------
  const allTopics = ["All"];
  articles.forEach((art) => {
    if (Array.isArray(art.tags)) {
      art.tags.forEach((tag) => {
        if (!allTopics.includes(tag)) {
          allTopics.push(tag);
        }
      });
    }
  });

  // -------------------------------
  // 4) Filter Logic
  // -------------------------------
  const handleTopicChange = (event) => {
    const { value } = event.target;
    if (value.includes("All")) {
      setSelectedTopics(["All"]);
    } else {
      setSelectedTopics(typeof value === "string" ? value.split(",") : value);
    }
  };

  let filteredArticles;
  if (selectedTopics.includes("All") || selectedTopics.length === 0) {
    filteredArticles = articles;
  } else {
    filteredArticles = articles.filter((article) =>
      article.tags?.some((tag) => selectedTopics.includes(tag))
    );
  }

  // -------------------------------
  // 5) View Count Logic
  // -------------------------------
  const handleIncrementView = async (blogId, notionLink) => {
    try {
      const res = await fetch(`http://localhost:5000/api/blogs/${blogId}`);
      const updatedBlog = await res.json();

      setArticles((prevArticles) =>
        prevArticles.map((a) => (a._id === updatedBlog._id ? updatedBlog : a))
      );

      if (notionLink) {
        window.open(notionLink, "_blank");
      }
    } catch (err) {
      console.error("Error incrementing view count:", err);
    }
  };

  // -------------------------------
  // 6) Like Logic
  // -------------------------------
  const handleLike = async (blogId) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/blogs/${blogId}/like`,
        {
          method: "PATCH",
        }
      );
      const data = await res.json();
      if (res.ok && data.blog) {
        const updated = data.blog;
        setArticles((prev) =>
          prev.map((a) => (a._id === updated._id ? updated : a))
        );
      } else {
        console.error("Failed to increment like:", data.error);
      }
    } catch (err) {
      console.error("Error incrementing like:", err);
    }
  };

  // -------------------------------
  // 7) Contact Form State & Logic
  // -------------------------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/blogs/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: contactEmail,
          message,
        }),
      });

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        if (res.ok) {
          setStatus("Your message has been sent!");
          setFirstName("");
          setLastName("");
          setContactEmail("");
          setMessage("");
        } else {
          setStatus(data.error || "Something went wrong. Please try again.");
        }
      } else {
        setStatus("Unexpected response from server.");
        console.error("Response was not JSON:", await res.text());
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      setStatus("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // -------------------------------
  // 8) Render
  // -------------------------------
  if (loading) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        Loading articles...
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 2 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          "Compiling thoughts. Rendering ideas."
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          My adventures in code, tech, and everything in between!.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="topic-select-label">Filter by Topic</InputLabel>
          <Select
            multiple
            labelId="topic-select-label"
            id="topic-select"
            value={selectedTopics}
            onChange={handleTopicChange}
            renderValue={(selected) => selected.join(", ")}
            label="Filter by Topic"
          >
            {allTopics.map((topic) => (
              <MenuItem key={topic} value={topic}>
                {topic}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* <Box id="experience-section" sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          My Experience Section
        </Typography>
        <Typography variant="body1">
          This could be your timeline, career experience, or anything you like.
        </Typography>
      </Box> */}

      <BlogList
        articles={filteredArticles}
        onIncrementView={handleIncrementView}
        onLike={handleLike}
      />

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Drop Me a Line, Let Me Know What You Think
        </Typography>

        <Box
          component="form"
          onSubmit={handleContactSubmit}
          sx={{
            maxWidth: 600,
            mx: "auto",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <input
              type="text"
              placeholder="First Name *"
              style={{ flex: 1, padding: "8px" }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name *"
              style={{ flex: 1, padding: "8px" }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Box>
          <input
            type="email"
            placeholder="Email *"
            style={{ padding: "8px", width: "100%" }}
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message..."
            style={{ padding: "8px", minHeight: "100px", width: "100%" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            style={{
              padding: "10px 20px",
              backgroundColor: "#6A0DAD",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              alignSelf: "flex-end",
            }}
          >
            {sending ? "Sending..." : "Submit"}
          </button>

          {status && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {status}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default BlogPage;
