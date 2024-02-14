const { Router } = require("express");

const { createUser } = require("../controller/user.controller");

const useRouter = Router();

useRouter.post("/", createUser);

export default useRouter;
