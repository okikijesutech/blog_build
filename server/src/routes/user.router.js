const { Router } = require("express");

const {
  createUser,
  getAllUser,
  getAllPost,
  getPostById,
  refreshToken,
  login,
  createPost,
  updateUser,
} = require("../controller/user.controller");

const { authenticateToken } = require("../middleware/auth");

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.post("/login", login);
userRouter.get("/", authenticateToken, getAllUser);
userRouter.post("/post", authenticateToken, createPost);
userRouter.put("/:id", authenticateToken, updateUser);
userRouter.get("/posts", getAllPost);
userRouter.get("/post/:id", getPostById);
userRouter.post("/refresh-token", refreshToken);

module.exports = userRouter;
