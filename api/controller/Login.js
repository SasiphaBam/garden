// import userModel from "../Models/userModel";
// import bcrypt from "bcrypt";
// import validator from "validator";
// import jwt from "jsonwebtoken";

// export async function Login(req, res) {
//     const { username, password } = req.body;

//     try {
//         let user = await userModel.findOne({ username })

//         if(!user) {
//             return res.status(400).json("Invalid username or password");
//         }

//         const isValidPassword = await bcrypt.compare(password, user.password)

//         if(!isValidPassword) {
//             return res.status(400).json("Invalid username or password");
//         }

//         res.status(200);
//     } 
//     catch(error) {

//     }
// }
