import express from "express"
const router = express.Router();
import {registeruser,deleteuser,updateuser} from "../controller/register.js"
import user from "../controller/login.js"

// import loginuser from "../controller/register.js"



router.post('/register', registeruser);
router.post('/login',user);
router.delete('/delete',deleteuser);
router.patch('/update/:id', updateuser);
export default router;