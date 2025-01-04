import express from "express"
const router = express.Router();

import sentMail from "../frontend/vite-project/src/user Management/signup/gmail/gmail.js";


router.post('/gmail', sentMail);

export default router;