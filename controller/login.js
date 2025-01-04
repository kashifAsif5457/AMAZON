
import express from "express";
import teacher from "../Model/register.js"
import bcrypt from "bcrypt";


// Login User
const user = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send({
                message: "Field Required"
            });
        }
        const login = await teacher.findOne({ email: email });
        console.log(login);
        if (!login) {
            console.log(error);
            res.send({
                message: "Invalid login"
            })
        }
        else {
            console.log(login);
            res.send({
                message: "Login Successsfully",
            })
        }
    }
    catch (error) {
        console.log(error);
        res.send({
            message: "Error Occur While Register"
        })
    }
};
export default user
