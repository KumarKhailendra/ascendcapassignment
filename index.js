const express = require("express");
const dotenv = require("dotenv");
const users = require("./routes/userRoutes");
const lists = require("./routes/listRoutes");
require("./Database/db");


const app = express();
dotenv.config();

const corsOptions = {
  origin: "https://ascendcapassignment.vercel.app",
  methods: ["POST", "GET", "DELETE", "PUT", "PATCH"],
  Credentials: true,
  optionSuccessStatus:200
}

app.use(express.json());
app.use(cors(corsOptions));


app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/user", users);
app.use("/api/list", lists);


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
