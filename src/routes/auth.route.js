// import express from 'express';
// import trimRequest from "trim-request";

// const router= express.Router();
// import { register,login,logout,refershToken } from '../controllers/auth.controller.js';
// import authMiddleware from '../middlewares/auth.middleware.js';
// router.route("/register").post(trimRequest.all,register);   //trim eliminates the spaces  
// router.route("/login").post(trimRequest.all,login);
// router.route("/logout").post(trimRequest.all,logout);
// router.route("/refreshToken").post(trimRequest.all,refershToken);
// router.route("/testingauthMiddleware").get(trimRequest.all,authMiddleware,(req,res)=>{
//     res.send("hello");
// });
// export default router;


import express from "express";
import trimRequest from "trim-request";
import {
  login,
  logout,
  refreshToken,
  register,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.route("/register").post(trimRequest.all, register);
router.route("/login").post(trimRequest.all, login);
router.route("/logout").post(trimRequest.all, logout);
router.route("/refreshtoken").post(trimRequest.all, refreshToken);

export default router;