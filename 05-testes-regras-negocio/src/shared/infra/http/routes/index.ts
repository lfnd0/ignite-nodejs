import { Router } from "express";

import { authenticateRouter } from "./authenticate.routes";
import { carRouter } from "./cars.routes";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationsRouter);
router.use("/users", usersRouter);
router.use(authenticateRouter);
router.use("/cars", carRouter);

export { router };
