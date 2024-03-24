// import db from "../connect.js";
// import mongoose from "mongoose";

// export function Signup(req, res) {
//   const uri = process.env.ATLAS_URI;
//   const db = mongoose
//     .connect(uri, {
//       useNewUrlParses: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("MongoDB conection"))
//     .catch((error) => console.log("MongoDB conection failed: ", error.message));
  // const sql =
  //   "INSERT INTO user (username, password, email, telephone) Values (?, ?, ?, ?)";
  // const { username, password, email, telephone } = req.body;
  // console.log(req.body);
  // db.query(sql, [username, password, email, telephone], (err) => {
  //   if (err) {
  //     console.error("Error inserting data:", err);
  //     return res.status(500).json({ error: "Internal Server Error" });
  //   }
  //   console.log("Data inserted successfully:");
  //   res.status(200).json({ message: "Data inserted successfully"});
  // });
// }
