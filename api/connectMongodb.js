import mongoose from "mongoose";

dotenv.config();
const uri = process.env.ATLAS_URI;

const db = mongoose.connect(uri, {
    useNewUrlParses: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB conection")).catch((error) => console.log("MongoDB conection failed: ", error.message))

export default db;


