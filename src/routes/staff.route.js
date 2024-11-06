import { Router } from "express";
import { registerStaff } from "../controllers/staff.controller.js";

const router = Router();

// console.log("Router");

router.route('/register').post(registerStaff)

export default router