const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userroute = require("./routes/user.js");
const authroute = require("./routes/auth.js");
const productroute=require("./routes/product.js");
const dotenv = require("dotenv");

dotenv.config();

main().catch((err) => console.log(err));

mongoose.set("strictQuery", true);
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB Connected");
}

app.use(express.json());
app.use("/api/auth", authroute);
app.use("/api/users", userroute);
app.use("/api/products", productroute);

app.listen(5000, () => {
  console.log("Backend Server running ");
});
