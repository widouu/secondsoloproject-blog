const express = require("express");
const postRoutes =require ("./routes/posts.js")
const authRoutes =require ("./routes/auth.js")
const usersRoutes =require ("./routes/users.js")
const cookieParser = require ("cookie-parser")

const cors = require("cors");
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",usersRoutes)



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
