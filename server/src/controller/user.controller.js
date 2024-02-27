const { PrismaClient } = require("@prisma/client");

const userClient = new PrismaClient();

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { generateAccessToken } = require("../middleware/auth");

// create user
const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Input user name and password" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userClient.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
    res.status(200).json({ data: user, message: "User created" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "internal server error" });
  }
};
// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userClient.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      res.status(400).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password || "");

    if (passwordMatch) {
      const accessToken = generateAccessToken(user);
      const refreshToken = jwt.sign(process.env.REFRESH_TOKEN);
      res.status(200).json({
        data: user,
        message: "Login successful",
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } else {
      res.status(400).json({ message: "Invalid password" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "internal server error" });
  }
};
// refreshToken
const refreshToken = async (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null)
    return res.status(401).json({ message: "Refresh token is required" });
  if (!refreshToken.includes(refreshToken)) return res.status(403);

  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid refreshtoken" });
      }
      const accessToken = generateAccessToken({ name: user.name });
      res.status(201).json({ accessToken: accessToken });
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
// getAllUser
const getAllUser = async (req, res) => {
  try {
    const allUser = await userClient.user.findMany({});

    res.status(200).json(allUser);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "internal server error" });
  }
};
// updateUser
const updateUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await userClient.user.create({
      data: {
        email: email,
        name: name,
        password: password,
      },
    });
    res.status(200).json({ message: "User updated" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
// create post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await userClient.post.create({
      data: {
        title: title,
        content: content,
      },
    });
    res.status(200).json({ data: post, message: "Post created" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "internal server error" });
  }
};
// get all post
const getAllPost = async (req, res) => {
  try {
    const posts = await userClient.post.findMany({});
    res.status(200).json([posts]);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message });
  }
};
// get post by id
const getPostById = async (req, res) => {
  try {
    const { id } = req.body;
    const post = await userClient.post.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(post);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
//updatePost
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { img, title, content } = req.body;
  const post = await userClient.post({
    where: {
      id: id,
    },
    data: {
      img: img,
      title: title,
      content: content,
    },
  });
};
// delete post
const deletePost = async (req, res) => {
  try {
    const { id } = req.body;
    const post = await userClient.user.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Succesfully deleted post" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUser,
  login,
  refreshToken,
  getAllUser,
  updateUser,
  getAllPost,
  createPost,
  getPostById,
  deletePost,
};
