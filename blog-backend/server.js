// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Main routes for blogs
app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("Blog backend is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.post("api/contact", async (req, res) => {
//   console.log("Contact form data:", req.body);
//   const { firstName, lastName, email, message } = req.body;

//   if (!firstName || !lastName || !email || !message) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       logger: true,
//       debug: true,
//     });

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: `New Contact Form Submission from ${firstName} ${lastName}`,
//       text: `Message from ${firstName} ${lastName} (${email}):\n\n${message}`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to send email. Please try again later." });
//   }

//   return res.json({ message: "Received contact form" });
// });
