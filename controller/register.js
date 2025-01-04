import express from "express";
import teacher from "../Model/register.js";
import bcrypt from "bcrypt";


// Register User
 export const registeruser = async (req, res) => {
    try {
        const { name, email, password} = req.body;

        if (!name || !email || !password ) {
            return res.status(400).send({ message: "All fields are required" });
        }

        // if (password !== confirmPassword) {
        //     return res.status(400).send({ message: "Passwords do not match" });
        // }

        const existingTeacher = await teacher.findOne({ email });
        if (existingTeacher) {
            return res.status(400).send({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password.toString(), 10);

        const saveMentor = await new teacher({ name, email, password: hashedPassword }).save();
        if (saveMentor) {
            return res.status(201).send({ message: "Teacher Registered Successfully" });
        }

        res.status(500).send({ message: "Failed to register teacher" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).send({ message: "An error occurred during registration" });
    }
};

// // Login User
// const users = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             res.status(400).send({
//                 message: "Field Required"
//             });
//         }
//         const login = await teacher.findOne({ email: email });
//         console.log(login);
//         if (!login) {
//             console.log(error);
//             res.send({
//                 message: "Invalid login"
//             })
//         }
//         else {
//             console.log(login);
//             res.send({
//                 message: "Login Successsfully",
//             })
//         }
//     }
//     catch (error) {
//         console.log(error);
//         res.send({
//             message: "Error Occur While Register"
//         })
//     }
// }


// Delete User
export const deleteuser = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send({ message: "Email is required" });
        }

        const deleteuser = await teacher.deleteOne({ email });
        if (deleteuser.deletedCount === 0) {
            return res.status(400).send({ message: "Email not found" });
        }

        res.send({ message: "Email deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send({ message: "An error occurred during deletion" });
    }
};

// Update User
export const updateuser = async (req, res) => {
    try {
        const { email, updates } = req.body;
        if (!email || !updates) {
            return res.status(400).send({ message: "Email and update fields are required" });
        }

        const updateuser = await teacher.updateOne({ email }, { $set: updates });
        if (updateuser.matchedCount === 0) {
            return res.status(400).send({ message: "User not found" });
        }

        res.send({ message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send({ message: "An error occurred during update" });
    }
}

export default { registeruser,deleteuser,updateuser}
