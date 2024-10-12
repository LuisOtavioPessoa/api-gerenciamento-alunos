import { Router } from "express";
import UserController from "../controller/UserController.js";

const router = Router();

router.get("/alunos", UserController.findAll);
router.get("/alunos/:id", UserController.findById);
router.post("/alunos", UserController.save);
router.put("/alunos/:id", UserController.update);
router.delete("/alunos/:id", UserController.delete);


export default router;