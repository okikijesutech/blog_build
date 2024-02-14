const { PrismaClient } = require("@prisma/client");

const userClient = PrismaClient();

// create user
export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userClient.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    res.status(200).json({ data: user, message: "User created" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "internal server error" });
  }
};
// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userClient.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "internal server error" });
  }
};
// getAllUser
export const getAllUser = async (req, res) => {
  try {
    const allUser = await userClient.user.findMany({});

    res.status(200).json(allUser);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "internal server error" });
  }
};
// create post
export const createPost = async (req, res) => {
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
