import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRouter = Router();

const upload = multer({
  dest: "./avatar",
});

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserAvatarController();

usersRouter.post("/", upload.single("file"), createUserController.handle);
usersRouter.patch("/", updateUserController.handle);

export { usersRouter };
